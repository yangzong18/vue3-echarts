/**
 *  函数防抖
 *  @param {Function} func  包装的函数
 *  @param {num} delay      延迟时间
 *  @param {boolean} immediate 第一次滚动会执行两次  开始滚动和结束滚动的时候
 *  @return {*}
 */

export function debounce(func, delay, immediate = false) {
  let timer,
    context = this;
  return (...args) => {
    if (immediate) {
      func.apply(context, args);
      immediate = false;
      return;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

/**
 *  通过高德获取geoJson
 *  @param {string} abcode     行政区code
 *  @param {string} geoJson    上一次获取的geoJson数据
 *  @return {}
 */

export function getGeoJson(adcode, geoJson = []) {
  return new Promise((resolve, reject) => {
    window.AMapUI.loadUI(["geo/DistrictExplorer"], (DistrictExplorer) => {
      var districtExplorer = new DistrictExplorer();
      districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
        if (error) {
          console.error(error);
          reject(error);
          return;
        }
        let Json = areaNode.getSubFeatures();
        let mapJson = {
          features: [],
        };
        if (Json.length === 0) {
          Json = geoJson.features.filter(
            (item) => item.properties.adcode == adcode
          );
        }
        mapJson.features = Json;
        resolve(mapJson);
      });
    });
  });
}

/**
 *  通过高德获取地图信息
 *  @param {string} abcode  行政区code
 *  @return {}
 */

export function getMapInfo(abcode) {
  return new Promise((resolve, reject) => {
    var district = new window.AMap.DistrictSearch();
    district.search(abcode, function (status, result) {
      if (status != "complete") {
        reject(new Error("获取地图数据失败"));
        return;
      }
      const data = result.districtList[0];
      if (
        (data.level === "district" &&
          data.districtList[0].level === "street") ||
        !data.districtList
      ) {
        resolve([data]);
      }
      resolve(data.districtList);
    });
  });
}

/**
 * 修改省的名字
 * @param {string} name
 * @returns {string}
 */
export function filterName(name) {
  switch (name) {
    case "内蒙古自治区":
      name = "内蒙古";
      break;
    case "西藏自治区":
      name = "西藏";
      break;
    case "新疆维吾尔自治区":
      name = "新疆";
      break;
    case "宁夏回族自治区":
      name = "宁夏";
      break;
    case "广西壮族自治区":
      name = "广西";
      break;
    case "香港特别行政区":
      name = "香港";
      break;
    case "澳门特别行政区":
      name = "澳门";
      break;
    default:
      break;
  }
  return name;
}

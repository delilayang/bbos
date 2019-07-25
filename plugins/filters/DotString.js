import Vue from 'vue'

const DotString = (val, num) => {
    let count = (val.match(/[a-z0-9]/g) || []).length;
    let formatLen = count ? Math.round(count/2) : 0;
    let formatStrLen = count ? val.length - count : val.length;
    return formatStrLen > num ? `${val.slice(0, num + formatLen)}...` : val;
}

Vue.filter('dotString', DotString);
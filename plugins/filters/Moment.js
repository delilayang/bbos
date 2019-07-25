import Vue from 'vue'
import moment from "moment";

const Moment = (val, pattern) => {
    return moment(val).format(pattern);
}

Vue.filter('moment', Moment);
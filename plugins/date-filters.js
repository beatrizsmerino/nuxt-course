import Vue from "vue";
import { getDateFormatted } from "~/mixins/date-mixins.js";

Vue.filter("dateFormatted", getDateFormatted);

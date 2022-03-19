import { RouteRecordRaw } from "vue-router";
import {
  MediRegs,
  OBI4Wan,
  One,
  OperaMobile,
  SpisTresci,
  WiadomosciChemiczne,
} from "@/views/projects";

export const projects: RouteRecordRaw[] = [
  {
    path: "one",
    name: "project-one",
    component: One,
  },
  {
    path: "mediregs",
    name: "project-mediregs",
    component: MediRegs,
  },
  {
    path: "opera-mobile",
    name: "project-opera-mobile",
    component: OperaMobile,
  },
  {
    path: "spistresci",
    name: "project-spistresci-pl",
    component: SpisTresci,
  },
  {
    path: "wiadomosci-chemiczne",
    name: "project-wiadomosci-chemiczne",
    component: WiadomosciChemiczne,
  },
  {
    path: "obi4wan",
    name: "project-obi4wan",
    component: OBI4Wan,
  },
];

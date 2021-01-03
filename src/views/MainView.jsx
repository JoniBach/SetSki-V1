import { Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import SetSki from "../components/SetSki/SetSki";
import ResponsiveDrawer from "./ResponsiveDrawer";

export default function MainView() {
  return (
    <div>
      <ResponsiveDrawer>
        <SetSki color="secondary"/>
        <ArrowBack />
        <Typography variant="h2" />
        Try it out here
      </ResponsiveDrawer>
    </div>
  );
}

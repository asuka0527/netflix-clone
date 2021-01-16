import React from "react";

import { useContent } from "../hooks";
import selectionFilter from "../utils/selection-filter";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // we need the series and the films
  // this is will the target value
  const { series } = useContent("series");
  const { films } = useContent("films");
  // console.log(series);

  // we need slides
  const slides = selectionFilter({ series, films });
  console.log(slides);
  // pass it to the browse container
  return <BrowseContainer slides={slides} />;
}

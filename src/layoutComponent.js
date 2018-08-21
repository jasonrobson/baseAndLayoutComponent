import React from "react";

export const Box = props => <div {...props} />;

export const Grid = props => <Box {...props} display="inline-block" px={2} />;

export const Half = props => <Grid {...props} width={1 / 2} />;

export const Third = props => <Grid {...props} width={1 / 3} />;

export const Quarter = props => <Grid {...props} width={1 / 4} />;

export const Flex = props => <Box {...props} display="flex" />;

export const FlexAuto = props => <Box {...props} flex="1 1 auto" />;

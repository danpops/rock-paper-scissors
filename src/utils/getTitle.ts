const getTitle = (titleStr: string, capsActive: boolean) =>
  capsActive ? titleStr.toUpperCase() : titleStr;

export default getTitle;

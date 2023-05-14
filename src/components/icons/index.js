const { SvgIconStyle } = require("./SvgIconStyle");

const GetIcon = (name) => (
    <SvgIconStyle src={`/assets/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

export default GetIcon;

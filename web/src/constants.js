/**
 * @file constants
 * @copyright Copyright (c) 2018-2021 Dylan Miller and dfinityexplorer contributors
 * @license MIT License
 */

const Constants = Object.freeze({
  URI_CDN_FONT_AWESOME:
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  // Remove any fonts that aren't used!!!
  URI_CDN_GOOGLE_FONTS:
    'https://fonts.googleapis.com/css?family=Istok+Web:400|Muli:200,300,400,500',
  URI_ABOUT_DFINITY: 'https://dfinity.org/',
  URI_ABOUT_NOMICS: 'https://nomics.com/',
  URI_ABOUT_MATERIAL_UI: 'https://material-ui.com/',
  URI_ABOUT_REACT: 'https://reactjs.org/',
  URI_ABOUT_STYLED_COMPONENTS: 'https://www.styled-components.com/',
  URI_GITHUB_CONTRIBUTORS: 'https://github.com/orgs/dfinityexplorer/people',
  URI_GITHUB_DFINITY_EXPLORER_PROJECT: 'https://github.com/dfinityexplorer/dfinityexplorer-dashboard',
  URI_GITHUB_DYLAN: 'https://github.com/dylancm4',
  URI_GITHUB_MIT_LICENSE: 'https://github.com/dfinityexplorer/dfinityexplorer/blob/master/LICENSE',
  URI_GITHUB_TODD: 'https://github.com/toddkitchens',
  URI_GLOBE_EARTH_IMAGE_DARK: '//unpkg.com/three-globe/example/img/earth-night.jpg',
  URI_GLOBE_EARTH_IMAGE_LIGHT: '//unpkg.com/three-globe/example/img/earth-day.jpg',
  URI_NASA_EXPLORER: 'https://nssdc.gsfc.nasa.gov/multi/explorer.html',
  URI_TWITTER_DFINITY_EXPLORER: 'https://twitter.com/dfinityexplorer',
  // Remove colors that are not used!!!
  COLOR_DFINITY_BLACK: 'rgb(41, 42, 46)', // from dfinity.org/press
  COLOR_DFINITY_BLACK_LIGHTER: 'rgb(73, 75, 82)', //  COLOR_DFINITY_BLACK scaled lighter
  COLOR_DFINITY_BLACK_DARKER: 'rgb(27, 28, 31)', // COLOR_DFINITY_BLACK scaled darker
  COLOR_DFINITY_LIGHT_ORANGE: 'rgb(251, 176, 59)', // from dfinity.org style guide
  COLOR_DFINITY_DARK_ORANGE: 'rgb(241, 90, 36)', // from dfinity.org style guide
  COLOR_DFINITY_BLUE_400: '#29ABE2', // DFINITY logo blue
  COLOR_DFINITY_BLUE_500: '#009DDD',
  COLOR_DFINITY_BLUE_600: '#0090CF',
  COLOR_DFINITY_BLUE_700: '#007DBC',
  COLOR_DFINITY_BLUE_800: '#006DA8',
  COLOR_DFINITY_BLUE_900: '#004E88',
  COLOR_TEXT_LIGHT: '#FFFFFF', // This should be removed, replaced with COLOR_DARK_TEXT!!!
  COLOR_DARK_TEXT: '#FFFFFF',
  COLOR_DARK_TEXT_FADED: 'rgb(190, 191, 192)', // rgba(255, 255, 255, 0.7) on COLOR_DFINITY_BLACK, matches Material-UI Tab opacity
  COLOR_TEXT_DARKER: 'rgb(148, 149, 151)', // rgba(255, 255, 255, 0.5) on COLOR_DFINITY_BLACK
  COLOR_TEXT_DARKEST: 'rgb(106, 106, 109)', // rgba(255, 255, 255, 0.3) on COLOR_DFINITY_BLACK
  COLOR_LIGHT_TEXT_FADED: 'rgb(77, 77, 77)', // rgba(0, 0, 0, 0.7) on white, matches Material-UI Tab opacity
  COLOR_DARK_BODY_DARKER_MAC_OS: '#1B1B1B', // Calendar, Finder, iTunes, Messages
  COLOR_DARK_BODY_LIGHTER_MAC_OS: '#262626', // Finder
  COLOR_DARK_DRAWER_DIVIDER_MAC_OS: '#4B4B4B', // Calendar, Messages
  COLOR_DARK_DRAWER_DIVIDER_YOUTUBE: '#333333',
  COLOR_DARK_FOOTER_TEXT_ICON_NETFLIX: '#808080',
  COLOR_DARK_TEXT_MAC_OS: '#DCDCDC', // Calendar, iTunes
  COLOR_LIGHT_BODY_TEXT_GOOGLE: '#202124', // About, Account, News, Gmail, Contacts, Docs, Keep, Material
  COLOR_LIGHT_BODY_TEXT_DIM_GOOGLE: '#5F6368', // About, Account, Contacts, Docs, Drive, Gmail, Material
  COLOR_LIGHT_CHART_GOOGLE: '#9E9E9E', // Analytics, Firebase
  COLOR_LIGHT_DRAWER_DIVIDER_GOOGLE: '#E3E3E3', // Docs, Sheets
  COLOR_LIGHT_DRAWER_ICON_GOOGLE: '#5F6368', // Account, Docs, Drive, Calendar, Keep, Photos, Sheets
  COLOR_LIGHT_DRAWER_TEXT_GOOGLE: '#3C4043', // Account, Docs, Calendar, News, Photos, Sheets
  COLOR_TWITTER_BLUE: 'rgb(100, 164, 224)',
  COLOR_TWITTER_GREEN: 'rgb(131, 175, 97)',
  COLOR_TWITTER_ORANGE: 'rgb(244, 174, 78)',
  COLOR_TWITTER_PURPLE: 'rgb(165, 144, 211)',
  COLOR_GRAY_ON_WHITE: 'rgb(235, 235, 235)', // matches Material-UI IconButton hover
  FONT_PRIMARY: '\'Muli\', sans-serif',
  MATERIAL_FONT_SIZE_H1: '6rem', // 96px
  MATERIAL_FONT_SIZE_H2: '3.75rem', // 60px
  MATERIAL_FONT_SIZE_H3: '3rem', // 48px
  MATERIAL_FONT_SIZE_H4: '2.125rem', // 34px
  MATERIAL_FONT_SIZE_H5: '1.5rem', // 24px
  MATERIAL_FONT_SIZE_H6: '1.25rem', // 20px
  MATERIAL_FONT_SIZE_SUBTITLE_1: '1rem', // 16px
  MATERIAL_FONT_SIZE_SUBTITLE_2: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_BODY_1: '1rem', // 16px
  MATERIAL_FONT_SIZE_BODY_2: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_BUTTON: '0.875rem', // 14px
  MATERIAL_FONT_SIZE_CAPTION: '0.75rem', // 12px
  MATERIAL_FONT_SIZE_OVERLINE: '0.625rem', // 10px
  MATERIAL_CIRCULAR_INDICATOR_SIZE: 48,
  MATERIAL_UI_ICON_BUTTON_FONT_SIZE: 24,
  FONT_SIZE_TABLE_XS: '0.6875rem', // 11px
  BREAKPOINT_MIN_XS: 0,
  BREAKPOINT_MAX_XS: 599,
  BREAKPOINT_MIN_SM: 600,
  BREAKPOINT_MAX_SM: 959,
  BREAKPOINT_MIN_MD: 960,
  BREAKPOINT_MAX_MD: 1279,
  BREAKPOINT_MIN_LG: 1280,
  BREAKPOINT_MAX_LG: 1919,
  BREAKPOINT_MIN_XL: 1920,
  BREAKPOINT_LG_MAX_WIDTH: 1140, // from Bootstrap
  DRAWER_WIDTH: 256,
  FOOTER_HEIGHT: 96,
  FOOTER_MARGIN_XS: 8,
  FOOTER_MARGIN_SM_AND_UP: 32,
  ICON_SVG_PATH_BLOCK: 'M12 0L1 6v12.131L12 24l11-5.869V6.065L12 0zm7.91 6.646l-7.905 4.218L4.133 6.57l7.862-4.289 7.915 4.365zM3 8.23l8 4.363V21.2l-8-4.268V8.23zM13 21.2v-8.6l8-4.269v8.6L13 21.2z',
  ICON_SVG_PATH_BLOCK_TIME: 'M13 12l-.688-4h-.609L11 12a1.99 1.99 0 0 0-1 1.723 2 2 0 0 0 4 0A1.99 1.99 0 0 0 13 12zm-1-8C6.478 4 2 8.477 2 14s4.478 10 10 10 10-4.477 10-10S17.522 4 12 4zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM10 2.181V0h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226L20.586 3 22 4.414l-1.321 1.321a12.134 12.134 0 0 0-1.5-1.328z',
  ICON_SVG_PATH_CPU_CORES: 'M10 2H8V0h2v2zM2 8H0v2h2V8zm0-5c0-.551.448-1 1-1h4V0H3a3 3 0 00-3 3v4h2V3zm0 8H0v2h2v-2zM16 0h-2v2h2V0zm-3 0h-2v2h2V0zM2 14H0v2h2v-2zm18-2.042h-2.277l-2.36 5.386-2.883-7.93-2.442 5.78-2.071-4.14-1.129 1.966H4V20h16v-8.042zm-16 .063h2.259L8.027 8.94l1.935 3.866 2.589-6.126 2.899 7.976 1.62-3.697H20V4H4v8.021zM14 24h2v-2h-2v2zm8-11h2v-2h-2v2zM2 21v-4H0v4a3 3 0 003 3h4v-2H3c-.552 0-1-.449-1-1zm20 0c0 .551-.448 1-1 1h-4v2h4a3 3 0 003-3v-4h-2v4zm0-11h2V8h-2v2zm0 6h2v-2h-2v2zm2-13a3 3 0 00-3-3h-4v2h4c.552 0 1 .449 1 1v4h2V3zM8 24h2v-2H8v2zm3 0h2v-2h-2v2z',
  ICON_SVG_PATH_CYCLES_BURNED: 'M9.797.094c0 .004.047.101.113.215.524.957.824 2.109.79 3.03-.02.481-.102.786-.325 1.227-.281.559-.621.961-1.719 2.051-.836.828-1.215 1.254-1.578 1.774-.469.68-.715 1.214-.871 1.89a7.975 7.975 0 00-.016 3.504c.02.086.028.156.024.16-.016.016-.293-.25-.426-.406-.617-.738-1.02-1.781-1.168-3.023-.047-.414-.047-1.164 0-1.426.016-.102.027-.188.027-.192-.011-.007-.277.278-.433.465a8.483 8.483 0 00-.676.98 6.772 6.772 0 00-.828 2.462c-.055.41-.055 1.66 0 2.18.254 2.257 1.078 4.12 2.492 5.609.953 1.004 2.293 1.816 3.727 2.258.14.043.265.078.277.074.012-.004-.047-.086-.133-.18-.469-.531-.84-1.101-1.062-1.617-.266-.625-.32-1.14-.184-1.688.098-.398.195-.613.52-1.125.351-.554.468-.828.52-1.21.046-.383-.028-.887-.22-1.438-.054-.16-.097-.293-.09-.297.008-.012.255.086.45.18.496.246.93.601 1.195.976.113.168.3.508.328.606.004.031.02.047.028.039a1.358 1.358 0 00-.028-.215c-.054-.293-.054-1 0-1.285.086-.461.278-.945.508-1.313.348-.55.922-1.109 1.535-1.496.192-.117.64-.343.828-.414l.118-.043-.086.2a2.612 2.612 0 00-.223 1.226c.016.324.05.48.164.695.117.235.273.418.773.907.25.246.512.515.582.597.473.563.692 1.074.774 1.828.043.418-.024.844-.195 1.254-.047.102-.09.203-.094.219-.008.02.058-.039.148-.125.528-.535.965-1.383 1.102-2.152.023-.117.043-.23.05-.25.012-.04.075.03.239.261.558.801.691 1.93.367 3.184a7.072 7.072 0 01-1.238 2.492c-.074.094-.121.168-.102.168.043 0 .477-.14.73-.234.29-.11.798-.352 1.083-.516 1.5-.867 2.648-2.234 3.215-3.812.289-.813.43-1.684.43-2.664a5.76 5.76 0 00-.052-.907c-.105-.75-.28-1.441-.656-2.539-.433-1.289-.543-1.672-.61-2.101a6.669 6.669 0 01.618-3.907c.055-.117.098-.222.094-.226-.02-.02-.528.156-.86.3-.824.344-1.691.903-2.289 1.473-.382.364-.785.918-1.066 1.473-.066.133-.117.223-.113.2.027-.095.101-.622.125-.86.03-.324.03-.945.004-1.266a7.158 7.158 0 00-1.477-3.703 11.699 11.699 0 00-1.66-1.66 10.793 10.793 0 00-3.07-1.727c-.356-.129-.43-.156-.43-.14zm0 0',
  ICON_SVG_PATH_DATA_CENTERS: 'M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zM24 12c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12S5.372 0 12 0c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zM21.986 12c0-1.035-.177-2.08-.357-2.632a.611.611 0 00-.359-.378c-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11a1.78 1.78 0 00-.179.311 2.02 2.02 0 00-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099a2.65 2.65 0 00.298-.494c.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36a9.96 9.96 0 00-2.58 5.183c-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982a9.96 9.96 0 007.22 3.087c5.517 0 9.989-4.472 9.989-9.989zM10.479 5.643c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z',
  ICON_SVG_PATH_MEMORY: 'M15.297.168c-.078.016-.211.066-.3.113-.153.078-.517.434-7.388 7.305C2.008 13.187.371 14.84.313 14.94a1.24 1.24 0 00-.02 1.176c.059.125.445.52 3.758 3.832 3.312 3.313 3.707 3.7 3.832 3.758a1.24 1.24 0 001.176-.02c.097-.054.504-.449 1.535-1.476A86.67 86.67 0 0012 20.793c0-.016-.469-.496-1.04-1.07-1.108-1.114-1.14-1.153-1.218-1.442a1.476 1.476 0 01.012-.64c.144-.473.605-.82 1.09-.825.21-.003.37.036.566.133.145.07.246.168 1.2 1.121.578.57 1.058 1.04 1.07 1.04.027 0 1.875-1.848 1.875-1.876 0-.011-.47-.492-1.04-1.066-1.109-1.113-1.14-1.152-1.218-1.445a1.403 1.403 0 01.015-.637c.145-.473.602-.82 1.086-.824.211-.004.372.035.567.133.144.07.25.168 1.203 1.117a36.05 36.05 0 001.066 1.043c.028 0 1.875-1.848 1.875-1.875 0-.012-.468-.492-1.039-1.07-1.11-1.114-1.14-1.15-1.218-1.442a1.403 1.403 0 01.015-.637 1.18 1.18 0 011.09-.824c.207-.004.367.031.566.129.141.074.247.172 1.2 1.121.574.574 1.054 1.043 1.07 1.043.008 0 .648-.633 1.418-1.406 1.027-1.031 1.422-1.438 1.477-1.535a1.24 1.24 0 00.019-1.176c-.059-.121-.395-.469-2.832-2.918C16.977 1.043 16.281.355 16.141.28a1.503 1.503 0 00-.582-.144c-.07 0-.188.015-.262.031zm.469 6.016c.191.039.39.148.546.304.368.364.454.867.239 1.332-.063.137-.172.25-1.317 1.399-.683.687-1.289 1.281-1.34 1.316-.05.035-.16.094-.242.125-.21.078-.547.086-.761.008a1.175 1.175 0 01-.676-1.645c.047-.101.25-.32 1.293-1.363.68-.683 1.277-1.27 1.332-1.308.265-.188.578-.243.926-.168zm-5.832 5.949c.175.058.351.172.492.316.332.348.406.887.18 1.34-.083.164-2.543 2.625-2.715 2.719a1.19 1.19 0 01-.57.144 1.117 1.117 0 01-.813-.343 1.137 1.137 0 01-.215-1.36c.059-.12.227-.297 1.336-1.406 1.223-1.227 1.277-1.273 1.437-1.352.09-.043.22-.086.278-.101a1.38 1.38 0 01.59.043zm0 0',
  ICON_SVG_PATH_MPS: 'M16 8V4l8 8-8 8v-4h-5V8h5zM9 8H7v8h2V8zM4.986 8H3v8h1.986V8zM1 8H0v8h1V8z',
  ICON_SVG_PATH_NODES: 'M24 8H0v4h24V8zM2 11l.863-2h1.275l-.863 2H2zm2.066 0l.864-2h1.275l-.863 2H4.066zm2.067 0l.863-2h1.275l-.864 2H6.133zm2.066 0l.863-2h1.274l-.863 2H8.199zm3.341 0h-1.274l.863-2h1.275l-.864 2zM21 11a1 1 0 110-2 1 1 0 010 2zm3 3H0v4h24v-4zM2 17l.863-2h1.275l-.863 2H2zm2.066 0l.863-2h1.275l-.863 2H4.066zm2.067 0l.863-2h1.275l-.864 2H6.133zm2.066 0l.863-2h1.274l-.863 2H8.199zm3.341 0h-1.274l.863-2h1.275l-.864 2zM21 17a1 1 0 110-2 1 1 0 010 2zm3 3H0v4h24v-4zM2 23l.863-2h1.275l-.863 2H2zm2.066 0l.863-2h1.275l-.863 2H4.066zm2.067 0l.863-2h1.275l-.864 2H6.133zm2.066 0l.863-2h1.274l-.863 2H8.199zm3.341 0h-1.274l.863-2h1.275l-.864 2zM21 23a1 1 0 110-2 1 1 0 010 2zm1-17H2l4-6h12l4 6z',
  ICON_SVG_PATH_PRICE: 'M19 16.166c0-4.289-4.465-5.483-7.887-7.091-2.079-1.079-1.816-3.658 1.162-3.832 1.652-.1 3.351.39 4.886.929l.724-3.295c-1.814-.551-3.437-.803-4.885-.841V0h-2v2.134c-3.89.535-5.968 2.975-5.968 5.7 0 4.876 5.693 5.62 7.556 6.487 2.54 1.136 2.07 3.5-.229 4.021-1.993.451-4.538-.337-6.45-1.079L5 20.551c1.787.923 3.931 1.417 6 1.453V24h2v-2.105c3.313-.464 6.005-2.293 6-5.729z',
  ICON_SVG_PATH_SUBNETS: 'M10.26 4.171a26.138 26.138 0 00-1.581-.719C9.449 1.372 10.561 0 12 0c1.402 0 2.494 1.301 3.26 3.292-.492.211-.998.447-1.572.739C13.1 2.464 12.43 1.756 12 1.756c-.442 0-1.14.75-1.74 2.415zM12 22.244c-.429 0-1.1-.708-1.688-2.275a26.3 26.3 0 01-1.572.739C9.507 22.699 10.598 24 12 24c1.439 0 2.551-1.372 3.321-3.452a26.244 26.244 0 01-1.581-.719c-.6 1.665-1.298 2.415-1.74 2.415zm-4.708-2.216c-1.917.705-4.778 1.392-5.916-.317-.562-.845-.771-2.468 1.42-5.408a23.307 23.307 0 011.937-2.249 36.856 36.856 0 015.505-4.598C9.155 6.86 7.974 6.29 6.822 5.865c-1.18-.434-2.219-.675-3.015-.675-.508 0-.886.107-1.009.289-.131.192-.138.783.445 1.842l.21-.012c1.048 0 1.897.865 1.897 1.932s-.85 1.932-1.897 1.932-1.897-.865-1.897-1.932c0-.345.089-.669.246-.95-1.11-1.96-.881-3.139-.419-3.815C1.707 4 2.392 3.434 3.807 3.434c2.514 0 5.901 1.66 8.082 2.946 2.214-1.363 5.717-3.16 8.304-3.16 1.421 0 2.106.581 2.431 1.069.562.845.771 2.468-1.42 5.407-3.084 4.137-9.216 8.606-13.912 10.332zM19.83 8.634c1.506-2.019 1.552-3.082 1.366-3.361-.126-.189-.492-.298-1.003-.298-1.953 0-4.926 1.459-6.638 2.447a39.854 39.854 0 013.522 2.617c-.407.413-.834.819-1.271 1.211a37.84 37.84 0 00-3.9-2.811 37.847 37.847 0 00-4.603 3.551 37.087 37.087 0 003.721 2.873c-.522.331-1.05.648-1.652.98l-.013-.009a38.44 38.44 0 01-3.316-2.632c-2.818 2.878-3.612 4.964-3.239 5.525.126.189.492.298 1.003.298 2.35 0 6.08-2.017 8.287-3.464 2.709-1.776 5.799-4.328 7.736-6.927zm2.377 7.091c.141-.27.22-.577.22-.903 0-1.067-.849-1.932-1.897-1.932s-1.897.865-1.897 1.932.849 1.932 1.897 1.932l.258-.018c.553 1.024.544 1.598.415 1.787-.124.181-.501.288-1.009.288-1.602 0-3.833-.945-5.27-1.658-.48.342-1.077.748-1.659 1.119 1.926 1.037 4.758 2.295 6.929 2.295 1.415 0 2.1-.566 2.424-1.042.461-.674.69-1.85-.411-3.8z',
  ICON_SVG_PATH_THEME_LIGHT: 'M.307 13.306a11.99 11.99 0 0 0 4.489 8.072 11.999 11.999 0 0 0 11.637 1.883 12.038 12.038 0 0 0 5.316-3.839 12.04 12.04 0 0 0 1.895-3.402.67.67 0 0 0-1.018-.775 9.122 9.122 0 0 1-2.15 1.124 9.114 9.114 0 0 1-8.842-1.43 9.11 9.11 0 0 1-3.412-6.136 9.11 9.11 0 0 1 1.926-6.751c.245-.308.52-.61.818-.9a.67.67 0 0 0-.572-1.144A12.044 12.044 0 0 0 2.84 4.425a11.987 11.987 0 0 0-2.533 8.88zm3.584-8.047a10.7 10.7 0 0 1 4.723-3.41l.027-.01a10.433 10.433 0 0 0-1.752 7.118 10.444 10.444 0 0 0 3.912 7.033 10.448 10.448 0 0 0 10.135 1.64c.196-.072.39-.15.583-.232A10.697 10.697 0 0 1 15.975 22 10.665 10.665 0 0 1 5.63 20.327a10.656 10.656 0 0 1-3.99-7.174A10.653 10.653 0 0 1 3.89 5.259z',
  ICON_SVG_PATH_THEME_DARK: 'M.307 13.306a11.99 11.99 0 0 0 4.489 8.072 11.999 11.999 0 0 0 11.637 1.883 12.038 12.038 0 0 0 5.316-3.839 12.04 12.04 0 0 0 1.895-3.402.67.67 0 0 0-1.018-.775 9.122 9.122 0 0 1-2.15 1.124 9.114 9.114 0 0 1-8.842-1.43 9.11 9.11 0 0 1-3.412-6.136 9.11 9.11 0 0 1 1.926-6.751c.245-.308.52-.61.818-.9a.67.67 0 0 0-.572-1.144A12.044 12.044 0 0 0 2.84 4.425a11.987 11.987 0 0 0-2.533 8.88z',
  ABOUT_PAGE_MARGIN_XS: 8,
  ABOUT_PAGE_MARGIN_SM: 48,
  ABOUT_PAGE_MARGIN_MD: 64,
  ABOUT_PAGE_MARGIN_LG: 128,
  DATA_CENTERS_PAGE_CARD_MAX_WIDTH_MD_AND_UP: 380,
  HOME_PAGE_MARGIN_XS: 8,
  HOME_PAGE_MARGIN_SM_AND_UP: 32,
  ABOUT_PAGE_PROJECT_ICONS_HEIGHT: 55,
  GOOGLE_ANALYTICS_TRACKING_ID: 'UA-138212575-1',
  BLOCKS_CARD_POLL_INTERVAL_MS: 3000,
  BLOCK_TIME_CARD_POLL_INTERVAL_MS: 3000, // Changed from 10000 for the BlockTimeCard "No Historical Blocks" fix!!!
  CYCLES_CARD_POLL_INTERVAL_MS: 3000,
  MESSAGES_TIME_POLL_INTERVAL_MS: 30000,
  PRICE_POLL_INTERVAL_MS: 30000,
  NETWORK_ERROR_THRESHOLD: 10,
  IC_RELEASE: 'sodium',
  NOMICS_API_KEY: '38f4023ce681a328edc018f7a8a28e06'
});

export default Constants;

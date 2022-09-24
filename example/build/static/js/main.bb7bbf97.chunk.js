(this["webpackJsonpunsplash-image-picker-example"]=this["webpackJsonpunsplash-image-picker-example"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);a(8);var r=a(0),n=a.n(r),l=a(4),c=a.n(l),o=a(2),i=(a(13),a(1)),s=a.n(i),u=a(5);var m=["children","className","width","padding","active","setActive"];function d(e){var t=e.children,a=e.width,r=void 0===a?540:a,l=e.padding,c=void 0===l||l,o=e.active,i=void 0!==o&&o,u=e.setActive,d=void 0===u?function(e){}:u,v=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,m);return n.a.createElement("div",Object.assign({onClick:function(e){d(!i)},onKeyUp:function(e){"Escape"===e.key&&d(!1)},className:s()("Modal",{active:i})},v),n.a.createElement(h,{onClick:function(e){i&&e.stopPropagation()},padding:c,className:"overflow-hidden h-full",style:{maxWidth:r,width:"100%"}},t))}function h(e){var t=e.children,a=e.padding,r=void 0===a||a,l=e.style,c=void 0===l?{}:l,o=e.onClick,i=void 0===o?function(e){}:o;return n.a.createElement("div",{onClick:i,style:c,className:s()("Card rounded shadow bg-white mx-auto my-auto",{"p-4":r})},t)}function v(e){var t=e.photo,a=e.onPhotoSelect,r=void 0===a?function(e){}:a;return n.a.createElement("div",{className:"group relative h-60 sm:h-44 md:h-32 w-full place-items-center object-cover cursor-pointer border theme-border-default",key:t.id,onClick:function(){return r(t)}},n.a.createElement("img",{className:"card-img place-items-center w-full object-cover h-full rounded",src:t.urls.thumb,alt:t.alt_description}),n.a.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 invisible group-hover:visible group-hover:bg-black/20",style:{color:"white"}},n.a.createElement("div",{className:"flex space-x-1 items-center place-content-center justify-between m-2"},n.a.createElement("div",{className:"flex items-center space-x-1"},n.a.createElement("img",{className:"rounded-full h-6 w-6",src:t.user.profile_image.small,alt:t.user.username}),n.a.createElement("h6",{className:"text-xs word-breaker"},t.user.name)))))}function f(e){var t=e.isLoading,a=void 0!==t&&t,r=e.isLoadingMore,l=void 0!==r&&r,c=e.photoList,o=e.total,i=e.onPhotoSelect,s=e.loadMore,u=n.a.useMemo((function(){return n.a.createRef()}),[]);return n.a.createElement("div",{className:"Body"},a?n.a.createElement("div",{className:"flex items-center justify-center h-96"},n.a.createElement(p,null)):n.a.createElement("div",null,Array.isArray(c)&&c.length>0&&n.a.createElement("div",{className:"PhotoList grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto p-4 pb-12",style:{maxHeight:"700px"},ref:u,onScroll:function(){if(u.current){var e=u.current,t=e.scrollTop;e.scrollHeight-(t+e.clientHeight)<20&&s()}}},c.map((function(e){return n.a.createElement(v,{key:e.id,photo:e,onPhotoSelect:i})})),l&&n.a.createElement("div",{className:"sm:col-span-2 md:col-span-3 my-4 flex justify-center"},n.a.createElement(p,null))),Array.isArray(c)&&0===c.length&&0===o&&n.a.createElement("div",{className:"flex items-center justify-center h-96"},"No photos found"),!o&&n.a.createElement("div",{className:"flex items-center justify-center h-96 text-gray-600"})))}function p(){return n.a.createElement("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-blue",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},n.a.createElement("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),n.a.createElement("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))}function g(e){var t=e.setQuery,a=e.query,r=e.onSearch;return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(e){try{return e.preventDefault(),r(a),Promise.resolve()}catch(e){return Promise.reject(e)}},className:"flex items-center space-x-2"},n.a.createElement("label",{className:" w-full"},n.a.createElement("input",{className:"placeholder:italic placeholder:theme-text-subtitle-1  w-full border theme-border-default rounded-md py-2 pl-3 pr-3  focus:outline-none focus:theme-border-primary  focus:ring-1 sm:text-sm",placeholder:"Search for an image",type:"text",name:"search",value:a,onChange:function(e){return t(e.target.value)}})),n.a.createElement("span",null,n.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md",type:"submit"},"Search")))))}function y(e){var t=e.unsplashAccessKey,a=e.initialPhotoSearchQuery,r=void 0===a?"":a,l=e.onPhotoSelect,c=void 0===l?function(e){}:l,o=n.a.useState([]),i=o[0],s=o[1],m=n.a.useState(),d=m[0],h=m[1],v=n.a.useState(""),p=v[0],y=v[1],E=n.a.useState(!1),b=E[0],x=E[1],N=n.a.useState(!1),w=N[0],S=N[1],P=n.a.useState(1),k=P[0],A=P[1],j=Object(u.a)({accessKey:t});n.a.useEffect((function(){""!==r&&(y(r),C(1,r))}),[]);var C=function(e,t,a){void 0===a&&(a=!1),b||w||(1===e?x(!0):S(!0),A(e),j.search.getPhotos({page:e,perPage:30,query:t,orientation:"landscape"}).then((function(e){var t,r=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.results;if(r){var n=r;a||(n=[].concat(i,r)),s(n),h(e.response.total)}x(!1),S(!1)})))};return n.a.createElement("div",{className:"ImagePicker items-center bg-white rounded"},n.a.createElement("div",{className:"bg-white "},n.a.createElement("div",{className:"Picker relative h-full rounded"},n.a.createElement("div",{className:"px-4 pt-4 font-bold text-lg bg-white "}," ","Search image"),n.a.createElement("div",{className:"shadow p-4 bg-white"},n.a.createElement("div",{className:""},n.a.createElement(g,{onSearch:function(e){s([]),C(1,e,!0)},query:p,setQuery:y}))),n.a.createElement(f,{total:d,photoList:i,isLoading:b,isLoadingMore:w,loadMore:function(){C(k+1,p)},onPhotoSelect:function(e){try{try{c(e)}catch(t){console.log(t)}return Promise.resolve()}catch(a){return Promise.reject(a)}}}))))}var E=function(e){var t=e.unsplashAccessKey,a=e.active,r=void 0!==a&&a,l=e.initialPhotoSearchQuery,c=void 0===l?"":l,o=e.setActive,i=void 0===o?function(e){}:o,s=e.onPhotoSelect,u=void 0===s?function(e){}:s,m=e.modalWidth,h=void 0===m?840:m,v=e.modalClassName,f=void 0===v?"":v;return r?n.a.createElement("div",{className:""},n.a.createElement(d,{active:r,setActive:i,width:h+"px",padding:!1,className:f},n.a.createElement(y,{unsplashAccessKey:t,initialPhotoSearchQuery:c,onPhotoSelect:u}))):null};function b(e){var t=e.photo;return console.log(t),n.a.createElement("img",{src:t.urls.regular,alt:t.alt_description,className:"sm:h-72 sm:w-full lg:h-52 object-cover rounded border  shadow-md"})}var x=function(){var e=n.a.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=n.a.useState([]),c=Object(o.a)(l,2),i=c[0],s=c[1];return console.log("dTUBUnPASfrsKOWYzVpAwvkr9Ks2MuY3i5YCvSqAxWQ"),n.a.createElement("div",{className:"App flex flex-col item-start justify-center bg-gray-50"},n.a.createElement("div",{className:"flex flex-col items-center space-y-4 p-4 sm:p-0 "},n.a.createElement("button",{className:"button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-42 h-12",onClick:function(){r(!0)}},"Search image"),n.a.createElement(E,{unsplashAccessKey:"dTUBUnPASfrsKOWYzVpAwvkr9Ks2MuY3i5YCvSqAxWQ",active:a,setActive:r,initialPhotoSearchQuery:"",onPhotoSelect:function(e){var t=null!==i&&void 0!==i?i:[];t.push(e),s(t),r(!1)}}),n.a.createElement("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center overflow-auto"},null===i||void 0===i?void 0:i.map((function(e,t){return n.a.createElement(b,{photo:e,key:t})})))))};c.a.render(n.a.createElement(x,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)},8:function(e,t,a){}},[[7,1,2]]]);
//# sourceMappingURL=main.bb7bbf97.chunk.js.map
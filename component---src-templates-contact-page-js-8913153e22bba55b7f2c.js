webpackJsonp([0xae010192da9c],{129:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),c=a(1),i=l(c),s=function(e){var t=e.email,a=e.description;return r.default.createElement("div",{className:"content",style:{border:"1px solid #eaecee",padding:"2em 4em"}},r.default.createElement("p",null,r.default.createElement("a",{href:"mailto:"+t},t)),r.default.createElement("p",null,a))};s.propTypes={email:i.default.string.isRequired,description:i.default.string},t.default=s,e.exports=t.default},138:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.contactPageQuery=t.ContactPageTemplate=void 0;var n=a(2),r=l(n),c=a(1),i=l(c),s=a(22),d=l(s),u=a(129),m=l(u),o=t.ContactPageTemplate=function(e){var t=e.title,a=e.subtitle,l=e.meta_title,n=e.meta_description,c=e.contacts;return r.default.createElement("div",null,r.default.createElement(d.default,null,r.default.createElement("title",null,l),r.default.createElement("meta",{name:"description",content:n})),r.default.createElement("section",{className:"hero is-primary is-bold"},r.default.createElement("div",{className:"hero-body"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-10 is-offset-1"},r.default.createElement("div",{className:"section"},r.default.createElement("h1",{className:"title"},t),r.default.createElement("h2",{className:"subtitle"},a))))))),r.default.createElement("section",{className:"section"},r.default.createElement("div",{className:"container"},c.map(function(e,t){return r.default.createElement(m.default,{key:t,email:e.email,description:e.description})}))))};o.propTypes={title:i.default.string,subtitle:i.default.string,meta_title:i.default.string,meta_description:i.default.string,contacts:i.default.array};var f=function(e){var t=e.data,a=t.markdownRemark.frontmatter;return r.default.createElement(o,{title:a.title,subtitle:a.subtitle,meta_title:a.meta_title,meta_description:a.meta_description,contacts:a.contacts})};f.propTypes={data:i.default.shape({markdownRemark:i.default.shape({frontmatter:i.default.object})})},t.default=f;t.contactPageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-contact-page-js-8913153e22bba55b7f2c.js.map
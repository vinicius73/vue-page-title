(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"D+WD":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t.$apollo.loading?e("div",{staticClass:"has-text-centered"},[t._m(0)]):e("Info",{attrs:{project:t.repository}})],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-spinner fa-pulse fa-3x"})])}],i=e("lTCR"),n=e.n(i),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box"},[e("h3",{staticClass:"title"},[e("router-link",{staticClass:"button is-info",attrs:{to:{name:"about"},title:"back"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-arrow-left"})])]),t.project.homepageUrl?e("a",{staticClass:"button is-outlined",attrs:{href:t.project.homepageUrl,target:"_blank"}},[t._m(0)]):t._e(),e("a",{staticClass:"button is-outlined",attrs:{href:t.project.url,target:"_blank"}},[t._m(1)]),e("a",{staticClass:"button is-outlined",attrs:{href:t.project.owner.url,target:"_blank"}},[e("img",{staticClass:"image is-inline is-16x16",attrs:{src:t.project.owner.avatarUrl}}),t._v("\n      "+t._s(t.project.owner.login)+"\n    ")]),t._v("\n\n    "+t._s(t.project.name)+"\n\n    "),e("span",{staticClass:"tag is-warning stargazers"},[t._v("\n      "+t._s(t.project.stargazers.totalCount)+"\n      "),t._m(2)])],1),e("h4",{staticClass:"subtitle"},[t._v(t._s(t.project.description))]),e("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[e("tbody",[e("tr",[e("th",[t._v("Github")]),e("td",[e("a",{attrs:{href:t.project.url}},[t._v(t._s(t.project.url))])])]),e("tr",[e("th",[t._v("Homepage")]),e("td",[e("a",{attrs:{target:"_blank",href:t.project.homepageUrl}},[t._v(t._s(t.project.homepageUrl))])])]),e("tr",[e("th",[t._v("Created at")]),e("td",[t._v(t._s(t.project.createdAt))])]),e("tr",[e("th",[t._v("Language")]),e("td",[t._v(t._s(t.project.primaryLanguage?t.project.primaryLanguage.name:"--"))])])])])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-home"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fab fa-github"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-star"})])}],c={name:"project-info",props:{project:Object}},p=c,u=(e("ZwPV"),e("KHd+")),f=Object(u["a"])(p,o,l,!1,null,"705ada16",null),_=f.exports,d={name:"single-project",components:{Info:_},apollo:{repository:{query:n.a`query repositoryInfo($id: ID!) {
                repository: node(id: $id) {
                  id
                  ...repoData
                }
              }

              fragment repoData on Repository {
                name
                url
                homepageUrl
                description
                createdAt
                primaryLanguage {
                  name
                }
                stargazers(first: 0) {
                  totalCount
                }
                owner {
                  login
                  url
                  avatarUrl
                }
              }`,variables(){return{id:this.id}}}},computed:{id(){return this.$route.params.id}},watch:{repository(){this.$title=`Project: ${this.repository.name}`}}},h=d,m=Object(u["a"])(h,s,r,!1,null,null,null);a["default"]=m.exports},PRG5:function(t,a,e){},ZwPV:function(t,a,e){"use strict";var s=e("PRG5"),r=e.n(s);r.a}}]);
//# sourceMappingURL=page-project.e893f3b5.js.map
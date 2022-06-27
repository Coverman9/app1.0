"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[76],{8076:function(t,s,e){e.r(s),e.d(s,{default:function(){return O}});var r=e(1413),n=e(5671),o=e(3144),i=e(136),u=e(5716),a=e(2791),l={mainImg:"Profile_mainImg__DCQUk",descriptionBlock:"Profile_descriptionBlock__+hTJA",mainPhoto:"Profile_mainPhoto__hdIAG"},p=e(9219),c=e(885),h=e(184),d=function(t){var s=(0,a.useState)(!1),e=(0,c.Z)(s,2),r=e[0],n=e[1],o=(0,a.useState)(t.status),i=(0,c.Z)(o,2),u=i[0],l=i[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,h.jsxs)("div",{children:[!r&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"no status"})}),r&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(u)},value:u})})]})},f=e(1862),m=function(t){if(!t.profile)return(0,h.jsx)(p.Z,{});return(0,h.jsxs)("div",{className:l.profileDiv,children:[(0,h.jsx)("div",{children:(0,h.jsx)("img",{alt:" ",className:l.mainImg,src:"https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"})}),(0,h.jsxs)("div",{className:l.descriptionBlock,children:[(0,h.jsx)("img",{alt:" ",src:t.profile.photos.large||f,className:l.mainPhoto}),t.isOwner&&(0,h.jsx)("input",{type:"file",onChange:function(s){s.target.files.length&&t.savePhoto(s.target.files[0])}}),(0,h.jsx)(d,{status:t.status,updateStatus:t.updateStatus})]})]})},x=e(6070),v=e(2982),j=e(6139),g=e(704),P={postsBlock:"MyPosts_postsBlock__lB-pf"},k="Post_item__Yu4oG",w=function(t){return(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("img",{alt:" ",src:"https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"}),t.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"like"})," ",t.likesCount]})]})},Z=e(5304),_=e(2031),S=(0,Z.D)(10),y=(0,g.Z)({form:"addNewPostForm"})((function(t){return(0,h.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(j.Z,{component:_.gx,name:"newPostElement",placeholder:"New Post",validate:[Z.C,S]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),C=function(t){var s=(0,v.Z)(t.posts).reverse().map((function(t){return(0,h.jsx)(w,{message:t.message,likesCount:t.likesCount})}));return(0,h.jsxs)("div",{className:P.postsBlock,children:[(0,h.jsx)("h3",{children:"My posts"}),(0,h.jsx)("div",{children:(0,h.jsx)(y,{onSubmit:function(s){t.addPost(s.newPostElement)}})}),(0,h.jsx)("div",{className:P.posts,children:s})]})},b=e(8687),N=(0,b.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,x.Wl)(s))}}}))(C),D="Profile_profilePage__VOKDQ",I=function(t){return(0,h.jsxs)("div",{className:D,children:[(0,h.jsx)(m,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(N,{})]})},A=e(6871),B=e(1548),U=e(7781),M=function(t){(0,i.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,o.Z)(e,[{key:"refreshProfile",value:function(){var t=this.props.router.params.userId;t||(t=this.props.loggedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.router.params.userId!==t.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,h.jsx)(I,(0,r.Z)((0,r.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),e}(a.Component);var O=(0,U.qC)((0,b.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,loggedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.et,getStatus:x.lR,updateStatus:x.Nf,savePhoto:x.Ju}),(function(t){return function(s){var e=(0,A.TH)(),n=(0,A.s0)(),o=(0,A.UO)();return(0,h.jsx)(t,(0,r.Z)((0,r.Z)({},s),{},{router:{location:e,navigate:n,params:o}}))}}),B.D)(M)},1548:function(t,s,e){e.d(s,{D:function(){return d}});var r=e(1413),n=e(5671),o=e(3144),i=e(136),u=e(5716),a=e(2791),l=e(6871),p=e(8687),c=e(184),h=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var s=function(s){(0,i.Z)(a,s);var e=(0,u.Z)(a);function a(){return(0,n.Z)(this,a),e.apply(this,arguments)}return(0,o.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,c.jsx)(t,(0,r.Z)({},this.props)):(0,c.jsx)(l.Fg,{to:"/login"})}}]),a}(a.Component);return(0,p.$j)(h)(s)}}}]);
//# sourceMappingURL=76.d906e48b.chunk.js.map
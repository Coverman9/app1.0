"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[76],{8076:function(t,s,e){e.r(s),e.d(s,{default:function(){return U}});var n=e(1413),i=e(5671),r=e(3144),o=e(136),u=e(5716),a=e(2791),l={mainImg:"Profile_mainImg__DCQUk",descriptionBlock:"Profile_descriptionBlock__+hTJA"},c=e(9219),p=e(885),d=e(184),f=function(t){var s=(0,a.useState)(!1),e=(0,p.Z)(s,2),n=e[0],i=e[1],r=(0,a.useState)(t.status),o=(0,p.Z)(r,2),u=o[0],l=o[1];(0,a.useEffect)((function(){l(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsx)("span",{onDoubleClick:function(){i(!0)},children:t.status||"no status"})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){i(!1),t.updateStatus(u)},value:u})})]})},h=function(t){return t.profile?(0,d.jsxs)("div",{className:l.profileDiv,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{alt:" ",className:l.mainImg,src:"https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&w=1000&q=80"})}),(0,d.jsxs)("div",{className:l.descriptionBlock,children:[(0,d.jsx)("img",{alt:" ",src:t.profile.photos.small}),(0,d.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})]}):(0,d.jsx)(c.Z,{})},m=e(6070),x=e(2982),j=e(6139),v=e(704),g={postsBlock:"MyPosts_postsBlock__lB-pf"},k="Post_item__Yu4oG",P=function(t){return(0,d.jsxs)("div",{className:k,children:[(0,d.jsx)("img",{alt:" ",src:"https://image.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg"}),t.message,(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:"like"})," ",t.likesCount]})]})},Z=e(5304),_=e(2031),w=(0,Z.D)(10),S=(0,v.Z)({form:"addNewPostForm"})((function(t){return(0,d.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(j.Z,{component:_.gx,name:"newPostElement",placeholder:"New Post",validate:[Z.C,w]})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Add post"})})]})})),b=function(t){var s=(0,x.Z)(t.posts).reverse().map((function(t){return(0,d.jsx)(P,{message:t.message,likesCount:t.likesCount})}));return(0,d.jsxs)("div",{className:g.postsBlock,children:[(0,d.jsx)("h3",{children:"My posts"}),(0,d.jsx)("div",{children:(0,d.jsx)(S,{onSubmit:function(s){t.addPost(s.newPostElement)}})}),(0,d.jsx)("div",{className:g.posts,children:s})]})},C=e(8687),y=(0,C.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,m.Wl)(s))}}}))(b),N="Profile_profilePage__VOKDQ",D=function(t){return(0,d.jsxs)("div",{className:N,children:[(0,d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(y,{})]})},B=e(6871),A=e(1548),I=e(7781),M=function(t){(0,o.Z)(e,t);var s=(0,u.Z)(e);function e(){return(0,i.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.loggedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(D,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,pdateStatus:this.props.updateStatus}))}}]),e}(a.Component);var U=(0,I.qC)((0,C.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,loggedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:m.et,getStatus:m.lR,updateStatus:m.Nf}),(function(t){return function(s){var e=(0,B.TH)(),i=(0,B.s0)(),r=(0,B.UO)();return(0,d.jsx)(t,(0,n.Z)((0,n.Z)({},s),{},{router:{location:e,navigate:i,params:r}}))}}),A.D)(M)},1548:function(t,s,e){e.d(s,{D:function(){return f}});var n=e(1413),i=e(5671),r=e(3144),o=e(136),u=e(5716),a=e(2791),l=e(6871),c=e(8687),p=e(184),d=function(t){return{isAuth:t.auth.isAuth}},f=function(t){var s=function(s){(0,o.Z)(a,s);var e=(0,u.Z)(a);function a(){return(0,i.Z)(this,a),e.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,p.jsx)(t,(0,n.Z)({},this.props)):(0,p.jsx)(l.Fg,{to:"/login"})}}]),a}(a.Component);return(0,c.$j)(d)(s)}}}]);
//# sourceMappingURL=76.0066df68.chunk.js.map
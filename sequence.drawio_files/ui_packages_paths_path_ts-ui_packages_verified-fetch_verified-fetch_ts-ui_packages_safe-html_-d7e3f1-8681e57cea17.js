"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_paths_path_ts-ui_packages_verified-fetch_verified-fetch_ts-ui_packages_safe-html_-d7e3f1"],{10866:(e,t,n)=>{n.d(t,{$_:()=>O,A4:()=>eM,BK:()=>eH,By:()=>en,C2:()=>A,C9:()=>j,CY:()=>v,Cv:()=>X,DG:()=>ea,DW:()=>u,ER:()=>D,FL:()=>d,GO:()=>ec,GX:()=>s,Gr:()=>o,H7:()=>z,HK:()=>eo,IU:()=>ek,IY:()=>S,J9:()=>Q,Jb:()=>eR,KL:()=>W,Kl:()=>eb,Mf:()=>i,N2:()=>er,NS:()=>F,OI:()=>P,P4:()=>R,QD:()=>B,QY:()=>q,Q_:()=>ez,Qi:()=>k,S$:()=>x,SV:()=>U,SY:()=>eS,St:()=>el,U:()=>ei,UY:()=>et,V6:()=>_,Vr:()=>es,WG:()=>$,ZH:()=>h,Zv:()=>f,_h:()=>eg,a_:()=>ee,aw:()=>eL,bN:()=>e_,cN:()=>eC,cb:()=>eI,cm:()=>ed,dQ:()=>y,db:()=>J,ef:()=>eN,fW:()=>eT,gx:()=>c,iT:()=>g,j6:()=>K,j9:()=>M,jP:()=>I,lr:()=>l,mE:()=>G,mY:()=>a,oA:()=>ev,p1:()=>ew,qH:()=>eh,sA:()=>H,sT:()=>eu,t4:()=>b,u_:()=>ej,v5:()=>w,v_:()=>ef,vf:()=>e$,w2:()=>N,wu:()=>V,wy:()=>L,xR:()=>E,xv:()=>C,yi:()=>em,z4:()=>ep,zP:()=>p,zf:()=>m,zh:()=>T});var r=n(86283);function o(e,t,n){let o=e(t),i=new URL(o,r.jX.origin||"https://github.com");for(let[e,t]of(o===r.jX.pathname&&(i.search=new URLSearchParams(r.jX.search).toString()),Object.entries(n||{})))null==t?i.searchParams.delete(e):i.searchParams.set(e,t.toString());return i}function i(e,t,n){let r=o(e,t,n);return r.href.replace(r.origin,"")}let s=({searchTerm:e})=>`/search?q=${M(`${e}`)}&type=code`,a=({owner:e,repo:t,searchTerm:n})=>`/search?q=${M(`repo:${e}/${t} ${n}`)}&type=code`,c=()=>"/search",$=()=>"/search/advanced",u=()=>"/search/stats",l=({owner:e})=>`/${M(e)}`,m=({owner:e})=>`/${M(e)}.png?size=80`,p=({owner:e})=>`/users/${M(e)}/hovercard`,g=({owner:e,team:t})=>`/orgs/${M(e)}/teams/${M(t)}/hovercard`,f=({owner:e})=>`/orgs/${M(e)}/hovercard`,h=({userId:e})=>`/hovercards?user_id=${e}`;function d({owner:e,repo:t,action:n}){return n?`/${M(e)}/${M(t)}/${n}`:`/${M(e)}/${M(t)}`}let _=({owner:e,repo:t})=>`/${M(e)}/${M(t)}/stats`,y=({owner:e,repo:t})=>`/${M(e)}/${M(t)}/branches/check_tag_name_exists`,w=({owner:e,repo:t,branch:n})=>`/${M(e)}/${M(t)}/tree/${M(n)}`,L=({owner:e,repo:t})=>`/${M(e)}/${M(t)}/invitations`,v=({owner:e,repo:t,branchName:n})=>`/${M(e)}/${M(t)}/settings/branch_protection_rules/new?branch_name=${M(n)}`,j=({owner:e,repo:t,commitish:n,filePath:r,lineNumber:o,plain:i})=>{let s=i?`?plain=${i}`:"",a=o?`#L${o}`:"";return`/${M(e)}/${M(t)}/blob/${M(n)}/${r}${s}${a}`},b=({owner:e,repo:t,commitish:n,filePath:r,lineNumber:o})=>{let i=o?`#L${o}`:"";return`/${M(e)}/${M(t)}/blame/${M(n)}/${r}${i}`};function C({login:e}){return`/users/${M(e)}/dismiss_repository_notice`}function T({repo:e,commitish:t,path:n}){let r=["",e.ownerLogin,e.name,"deferred-metadata",t,n];return r.map(M).join("/")}function S(e){return`/${M(e.ownerLogin)}/${M(e.name)}`}function H(e){return`/${M(e.ownerLogin)}/${M(e.name)}?files=1`}function k({repo:e,commitish:t,action:n,path:r}){let o=["",e.ownerLogin,e.name,n,t];return r&&"/"!==r&&o.push(r),o.map(M).join("/")}let z=({owner:e,repo:t})=>`/${e}/${t}/sidepanel-metadata`;function R(e,t){return`/${e.ownerLogin}/${e.name}/detect_language?filename=${t}`}function M(e){return e.split("/").map(encodeURIComponent).join("/")}let I=({owner:e,repo:t,commitish:n})=>`/${M(e)}/${M(t)}/commit/${n}`,N=({owner:e,repo:t,ref:n,path:r})=>{let o=`/${M(e)}/${M(t)}/commits`;return n?r?`${o}/${M(n)}/${M(Y(r))}`:`${o}/${M(n)}`:o};function U({repo:e,branch:t,path:n,author:r}){let o=[e.ownerLogin,e.name,"commits",t,n].map(M).join("/");return`/${o}?author=${M(r)}`}function x(e,t){return`/${e.ownerLogin}/${e.name}/commit/${t}/status-details`}function P({repo:e,author:t}){let n=[e.ownerLogin,e.name];return`/${n.map(M).join("/")}/commits?author=${M(t)}`}let q=({owner:e,repo:t,commitish:n})=>`/${M(`${e}/${t}/commit/${n}/hovercard`)}`,W=({topicName:e})=>`/topics/${e}`,G=({categoryName:e})=>`/marketplace/category/${Z(e)}`,Q=({slug:e})=>`/marketplace/actions/${M(e)}`,X=({owner:e,repo:t,commitish:n,filePath:r})=>`/${e}/${t}/codeowners-validity/${n}/${r}`;function Y(e){return e.startsWith("/")?e.slice(1):e}function Z(e){return e.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase()}function A(e){return e.split("/").slice(0,-1).join("/")}function B({repo:e,baseUrl:t="",branch:n,filter:r,pagination:o}){let i=[e.ownerLogin,e.name,"activity"],s=[];return n&&s.push(`ref=${M(n)}`),r&&(r.activityType&&"all"!==r.activityType.toLocaleLowerCase()&&s.push(`activity_type=${M(r.activityType)}`),r.actor?.login&&s.push(`actor=${M(r.actor.login)}`),r.timePeriod&&"all"!==r.timePeriod.toLocaleLowerCase()&&s.push(`time_period=${M(r.timePeriod)}`),r.sort&&"desc"!==r.sort.toLocaleLowerCase()&&s.push(`sort=${M(r.sort)}`)),o&&(o.cursor&&s.push(`cursor=${M(o.cursor)}`),o.page&&s.push(`page=${o.page}`)),`${t}/${i.map(M).join("/")}${s.length>0?`?${s.join("&")}`:""}`}function D({repo:e,baseUrl:t="",branch:n,timePeriod:r}){let o=[e.ownerLogin,e.name,"activity","actors"],i=[];return n&&i.push(`ref=${M(n)}`),r&&i.push(`time_period=${M(r)}`),`${t}/${o.map(M).join("/")}${i.length>0?`?${i.join("&")}`:""}`}function F(){return"insights/actors"}function K({repo:e,base:t,head:n}){let r=[e.ownerLogin,e.name,"compare"].map(M).join("/"),o=`${M(t)}...${M(n)}`;return`/${r}/${o}`}function O({repo:e,base:t,head:n}){let r=[e.ownerLogin,e.name,"branches","pre_mergeable"].map(M).join("/"),o=`${M(t)}...${M(n)}`;return`/${r}/${o}`}function V({repo:e,refName:t}){return`/${[e.ownerLogin,e.name,"pull","new",t].map(M).join("/")}`}function E({repo:e,number:t}){return`/${[e.ownerLogin,e.name,"pull",t.toString()].map(M).join("/")}`}function J({repo:e,refName:t,discard:n}){return`/${[e.ownerLogin,e.name,"branches","fetch_and_merge",t].map(M).join("/")}${n?"?discard_changes=true":""}`}function ee({repo:e,commitOid:t,includeDirectories:n=!1}){let r=`/${[e.ownerLogin,e.name,"tree-list",t].map(M).join("/")}`;return n?`${r}?include_directories=${n}`:r}function et({repo:e,type:t,q:n,language:r,row:o,column:i,ref:s,path:a,codeNavContext:c}){let $=[e.ownerLogin,e.name].map(M).join("/");return`/${$}/find-react-${t}?q=${encodeURIComponent(n)}&language=${encodeURIComponent(r)}&row=${o}&col=${i}&ref=${s}&blob_path=${encodeURIComponent(a)}&code_nav_context=${encodeURIComponent(c)}`}let en=({owner:e,repo:t,issueNumber:n})=>`/${M(e)}/${M(t)}/issues/${n}`,er=({owner:e,repo:t,issueNumber:n,contentId:r})=>`/${M(e)}/${M(t)}/issues/${n}#issuecomment-${r}`,eo=({owner:e,repo:t,issueNumber:n,contentId:r})=>`/${M(e)}/${M(t)}/issues/${n}#issue-${r}`,ei=({owner:e,repo:t,issueNumber:n})=>`/${M(e)}/${M(t)}/issues/${n}/hovercard`;function es(e,t,n){let r=ey(e,"/",4),o=e.substring(r);return o===`/${t}`?"":o.startsWith(`/${t}/`)?o.substring(t.length+2):n}function ea(e,t){return`/${M(e)}/${M(t)}/community/code-of-conduct/new`}function ec(e,t){return`/${M(e)}/${M(t)}/community/license/new`}function e$(e,t){return`/${M(e)}/${M(t)}/security/policy`}function eu(e,t){return`/${M(e)}/${M(t)}/security/secret-scanning`}function el(e,t,n){return`/${M(e)}/${M(t)}/security/secret-scanning/${n}`}let em=({owner:e,repo:t,id:n})=>`/${M(e)}/${M(t)}/security/secret-scanning/${n}/timeline`,ep=({owner:e,repo:t,id:n,page:r})=>`/${M(e)}/${M(t)}/security/secret-scanning/${n}/locations?page=${r}`;function eg(e,t){return`/${M(e)}/${M(t)}/security/secret-scanning/resolve-react`}function ef(e,t,n=null){return null===n?`/organizations/${M(t)}/settings/security_analysis/custom_patterns/${e}`:`/${M(t)}/${M(n)}/settings/security_analysis/custom_patterns/${e}`}function eh(){return"https://github.com/community/community/discussions/categories/code-security"}let ed=({owner:e,repo:t,accessId:n,tokenType:r})=>`/${M(e)}/${M(t)}/security/secret-scanning/org-access?access_id=${n}&token_type=${r}`,e_=({notice:e})=>`/settings/dismiss-notice/${e}`;function ey(e,t,n){return e.split(t,n).join(t).length}let ew=e=>`/${M(`${e.ownerLogin}/${e.name}`)}/settings/transfer`,eL=()=>"/repositories/check-name",ev=()=>"/repositories",ej=e=>`/${M(`${e.ownerLogin}/${e.name}`)}/settings/transfer`,eb=e=>`/${M(`${e.ownerLogin}/${e.name}`)}/settings/abort_transfer`,eC=()=>"/new/import",eT=e=>{let t="/users/placeholder/organizations_info";return e&&(t+=`?owner=${e}`),t},eS=()=>"/repositories/new/templates",eH=e=>`/${M(e.ownerLogin)}/${M(e.name)}/graphs/contributors`,ek=e=>`/${M(e.ownerLogin)}/${M(e.name)}/settings/access`;function ez({org:e,propertyName:t}){let n=`/organizations/${M(e)}/settings/custom-properties`;return t?`${n}/${M(t)}`:n}function eR({org:e,propertyName:t}){let n=`/organizations/${M(e)}/settings/custom-property`;return t?`${n}/${M(t)}`:n}function eM({org:e}){return`/organizations/${M(e)}/settings/custom-properties`}function eI({org:e,propertyName:t}){return["","organizations",M(e),"settings","custom-properties-usage",M(t)].join("/")}function eN({org:e,repo:t}){return`/${M(`${e}/${t}`)}/settings/custom-properties`}},89445:(e,t,n)=>{function r(e,t={}){if(e.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function o(e,t){let n=t?.headers??{},o={...n,Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:i,headers:o})}n.d(t,{Q:()=>r,v:()=>o})},93062:(e,t,n)=>{n.d(t,{WZ:()=>m,sF:()=>g,wB:()=>l});var r,o=n(85893),i=n(42483),s=n(97011),a=n(27856),c=n.n(a),$=n(67294);function u(e){if("html"in e&&void 0!==e.html){let{html:t,...n}=e;return{safeHTML:t,props:n}}let{unverifiedHTML:t,...n}=e;return{safeHTML:c().sanitize(t),props:n}}let l=p(i.Z);l.displayName="SafeHTMLBox";let m=p(s.Z);function p(e){let t=(0,$.forwardRef)((t,n)=>{let{safeHTML:r,props:i}=u(t);return(0,o.jsx)(e,{ref:n,...i,dangerouslySetInnerHTML:r?{__html:r}:void 0})});return t}m.displayName="SafeHTMLText";let g=$.forwardRef((e,t)=>{let{safeHTML:n,props:r}=u(e);return(0,o.jsx)("div",{ref:t,...r,dangerouslySetInnerHTML:n?{__html:n}:void 0})});g.displayName="SafeHTMLDiv";try{(r=SafeHTMLComponent).displayName||(r.displayName="SafeHTMLComponent")}catch{}}}]);
//# sourceMappingURL=ui_packages_paths_path_ts-ui_packages_verified-fetch_verified-fetch_ts-ui_packages_safe-html_-d7e3f1-5207bd9e1a92.js.map
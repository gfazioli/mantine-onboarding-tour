(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,46588,(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",()=>e.r(13321)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push(["/"])})},62248,e=>{e.v({contentWrapper:"G7prqW_contentWrapper",main:"G7prqW_main",tab:"G7prqW_tab",tabContent:"G7prqW_tabContent",tabIcon:"G7prqW_tabIcon",tabInner:"G7prqW_tabInner",tableOfContents:"G7prqW_tableOfContents",tabsWrapper:"G7prqW_tabsWrapper"})},29801,e=>{e.v({code:"vyJi-q_code",icon:"vyJi-q_icon",tab:"vyJi-q_tab"})},10674,e=>{e.v({code:"gnfoGa_code",li:"gnfoGa_li",link:"gnfoGa_link",paragraph:"gnfoGa_paragraph",title:"gnfoGa_title",titleLink:"gnfoGa_titleLink",titleOffset:"gnfoGa_titleOffset",ul:"gnfoGa_ul"})},25181,e=>{e.v({icon:"M-wpNq_icon",root:"M-wpNq_root"})},4469,e=>{e.v({description:"_5dxj5W_description",links:"_5dxj5W_links",root:"_5dxj5W_root",title:"_5dxj5W_title"})},86156,e=>{e.v({body:"V2HS7a_body",icon:"V2HS7a_icon",label:"V2HS7a_label",root:"V2HS7a_root"})},31052,e=>{e.v({root:"B48zWq_root",search:"B48zWq_search",searchIcon:"B48zWq_searchIcon",section:"B48zWq_section",title:"B48zWq_title"})},80104,e=>{e.v({group:"_8hCRvG_group",groupsHeader:"_8hCRvG_groupsHeader",root:"_8hCRvG_root",section:"_8hCRvG_section",title:"_8hCRvG_title"})},31434,e=>{e.v({code:"ppJXuq_code"})},67275,e=>{e.v({editPage:"oTL85a_editPage",editPageIcon:"oTL85a_editPageIcon",inner:"oTL85a_inner",items:"oTL85a_items",link:"oTL85a_link",title:"oTL85a_title",wrapper:"oTL85a_wrapper"})},92106,e=>{e.v({custom:"OVMqeW_custom"})},79826,(e,t,o)=>{t.exports=JSON.parse('{"OnboardingTour":{"props":{"children":{"defaultValue":null,"description":"Child elements","name":"children","required":true,"type":{"name":"React.ReactNode"}},"closeOnEscape":{"defaultValue":"true","description":"Skip the tour when <code>Escape</code> is pressed.","name":"closeOnEscape","required":false,"type":{"name":"boolean"}},"closeOnOverlayClick":{"defaultValue":"false","description":"Skip the tour when the overlay around the highlighted element is clicked.","name":"closeOnOverlayClick","required":false,"type":{"name":"boolean"}},"content":{"defaultValue":null,"description":"Content of the tour. You can also pass a React component here","name":"content","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"cutoutPadding":{"defaultValue":null,"description":"Padding around the cutout highlight area in pixels. Default: <code>8</code>","name":"cutoutPadding","required":false,"type":{"name":"number"}},"cutoutRadius":{"defaultValue":null,"description":"Border radius of the cutout highlight area in pixels. Use a large value (e.g. <code>9999</code>) for circular elements. Default: <code>8</code>","name":"cutoutRadius","required":false,"type":{"name":"number"}},"endStepNavigation":{"defaultValue":null,"description":"Navigation end button label or Component. used when the tour is over and is not in loop","name":"endStepNavigation","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"focusRevealProps":{"defaultValue":null,"description":"Props passed to FocusReveal","name":"focusRevealProps","required":false,"type":{"name":"OnboardingTourFocusRevealProps | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => OnboardingTourFocusRevealProps) | undefined"}},"footer":{"defaultValue":null,"description":"Footer of the tour. You can also pass a React component here","name":"footer","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"header":{"defaultValue":null,"description":"Header of the tour. You can also pass a React component here","name":"header","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"loop":{"defaultValue":null,"description":"Loop the tour","name":"loop","required":false,"type":{"name":"boolean"}},"nextStepNavigation":{"defaultValue":null,"description":"Navigation next button label or Component","name":"nextStepNavigation","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"onOnboardingTourChange":{"defaultValue":null,"description":"Triggered when the active step changes","name":"onOnboardingTourChange","required":false,"type":{"name":"(tourStep: OnboardingTourStep<Record<string, unknown>>) => void"}},"onOnboardingTourComplete":{"defaultValue":null,"description":"Triggered when the tour is completed (user finishes the last step)","name":"onOnboardingTourComplete","required":false,"type":{"name":"() => void"}},"onOnboardingTourEnd":{"defaultValue":null,"description":"Triggered when the tour ends (always called, whether completed or skipped)","name":"onOnboardingTourEnd","required":false,"type":{"name":"() => void"}},"onOnboardingTourSkip":{"defaultValue":null,"description":"Triggered when the tour is skipped (user clicks Skip)","name":"onOnboardingTourSkip","required":false,"type":{"name":"() => void"}},"onOnboardingTourStart":{"defaultValue":null,"description":"Triggered when the tour starts","name":"onOnboardingTourStart","required":false,"type":{"name":"() => void"}},"prevStepNavigation":{"defaultValue":null,"description":"Navigation prev button label or Component","name":"prevStepNavigation","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"returnFocus":{"defaultValue":"true","description":"Give the focus back to the element that had it when the tour started, once the tour ends.","name":"returnFocus","required":false,"type":{"name":"boolean"}},"skipNavigation":{"defaultValue":null,"description":"Navigation close button label or Component","name":"skipNavigation","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"started":{"defaultValue":null,"description":"Controlled started state","name":"started","required":true,"type":{"name":"boolean"}},"stepCounterLabel":{"defaultValue":"(current, total) => `${current} of ${total}`","description":"Step counter text. Receives the 1-based current step and the total number of steps.","name":"stepCounterLabel","required":false,"type":{"name":"(current: number, total: number) => ReactNode"}},"stepper":{"defaultValue":null,"description":"Stepper component","name":"stepper","required":false,"type":{"name":"((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode) | undefined"}},"stepperProps":{"defaultValue":null,"description":"Stepper props","name":"stepperProps","required":false,"type":{"name":"Omit<StepperProps, \\"children\\">"}},"stepperStepProps":{"defaultValue":null,"description":"Stepper.Step props","name":"stepperStepProps","required":false,"type":{"name":"Omit<StepperStepProps, \\"children\\">"}},"title":{"defaultValue":null,"description":"Title of the tour. You can also pass a React component here","name":"title","required":false,"type":{"name":"ReactNode | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => ReactNode)"}},"tour":{"defaultValue":null,"description":"","name":"tour","required":true,"type":{"name":"OnboardingTourStep[]"}},"withAutoFocus":{"defaultValue":null,"description":"Move the keyboard focus into the popover when a step opens, so keyboard and screen reader users land on it","name":"withAutoFocus","required":false,"type":{"name":"boolean"}},"withKeyboardNavigation":{"defaultValue":"true","description":"Navigate the steps with the arrow keys (<code>→</code> next, <code>←</code> previous, mirrored in RTL). Ignored while the focus is inside the highlighted element or a field that uses the arrows itself.","name":"withKeyboardNavigation","required":false,"type":{"name":"boolean"}},"withNextButton":{"defaultValue":null,"description":"Show the next button","name":"withNextButton","required":false,"type":{"name":"boolean"}},"withPrevButton":{"defaultValue":null,"description":"Show the previous button","name":"withPrevButton","required":false,"type":{"name":"boolean"}},"withSkipButton":{"defaultValue":null,"description":"Show the skip button","name":"withSkipButton","required":false,"type":{"name":"boolean"}},"withStepCounter":{"defaultValue":null,"description":"Show a step counter (e.g. \\"2 of 5\\") between the skip and the navigation buttons. Changes are announced to screen readers.","name":"withStepCounter","required":false,"type":{"name":"boolean"}},"withStepper":{"defaultValue":null,"description":"Show the stepper","name":"withStepper","required":false,"type":{"name":"boolean"}}}},"OnboardingTourTarget":{"props":{"children":{"defaultValue":null,"description":"Target element","name":"children","required":true,"type":{"name":"React.ReactNode"}},"focusRevealProps":{"defaultValue":null,"description":"Props passed to FocusReveal","name":"focusRevealProps","required":false,"type":{"name":"OnboardingTourFocusRevealProps | ((tourController: Readonly<{ tour: OnboardingTourStep<Record<string, unknown>>[]; currentStep: OnboardingTourStep<Record<string, unknown>>; ... 8 more ...; options: OnboardingTourOptions<...>; }>) => OnboardingTourFocusRevealProps) | undefined"}},"id":{"defaultValue":null,"description":"The <code>data-onboarding-tour-id</code> attribute of the target element","name":"id","required":true,"type":{"name":"string"}},"refProp":{"defaultValue":null,"description":"Key of the prop that should be used to get element ref","name":"refProp","required":false,"type":{"name":"string"}}}},"OnboardingTourFocusReveal":{"props":{"children":{"defaultValue":null,"description":"Content","name":"children","required":false,"type":{"name":"React.ReactNode"}},"defaultFocused":{"defaultValue":null,"description":"Uncontrolled OnboardingTourFocusReveal initial focused state","name":"defaultFocused","required":false,"type":{"name":"boolean"}},"disableTargetInteraction":{"defaultValue":null,"description":"Disable interactions on the target component","name":"disableTargetInteraction","required":false,"type":{"name":"boolean"}},"focused":{"defaultValue":null,"description":"Controlled OnboardingTourFocusReveal focused state","name":"focused","required":false,"type":{"name":"boolean"}},"focusedMode":{"defaultValue":null,"description":"OnboardingTourFocusReveal mode/effects when focused","name":"focusedMode","required":false,"type":{"name":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\"","raw":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\" | undefined","value":[{"value":"undefined"},{"value":"\\"border\\""},{"value":"\\"none\\""},{"value":"\\"elastic\\""},{"value":"\\"glow\\""},{"value":"\\"glow-blue\\""},{"value":"\\"glow-green\\""},{"value":"\\"glow-red\\""},{"value":"\\"pulse\\""},{"value":"\\"rotate\\""},{"value":"\\"scale\\""},{"value":"\\"shake\\""},{"value":"\\"zoom\\""}]}},"focusedZIndex":{"defaultValue":null,"description":"z-index for the focused element (should be above the overlay). Defaults to 201.","name":"focusedZIndex","required":false,"type":{"name":"number"}},"onBlur":{"defaultValue":null,"description":"Called when OnboardingTourFocusReveal is blurred","name":"onBlur","required":false,"type":{"name":"() => void"}},"onChange":{"defaultValue":null,"description":"Called when OnboardingTourFocusReveal focused state changes","name":"onChange","required":false,"type":{"name":"(focused: boolean) => void"}},"onFocus":{"defaultValue":null,"description":"Called when OnboardingTourFocusReveal is focused","name":"onFocus","required":false,"type":{"name":"() => void"}},"onRevealFinish":{"defaultValue":null,"description":"Callback fired after scroll","name":"onRevealFinish","required":false,"type":{"name":"() => void"}},"overlayProps":{"defaultValue":null,"description":"Props passed down to <code>Overlay</code> component","name":"overlayProps","required":false,"type":{"name":"OverlayProps & ElementProps<\\"div\\">"}},"popoverContent":{"defaultValue":null,"description":"Dropdown content for Popover","name":"popoverContent","required":false,"type":{"name":"React.ReactNode"}},"popoverDropdownProps":{"defaultValue":null,"description":"Props passed down to the <code>Popover.Dropdown</code> element, for example <code>aria-*</code> attributes or a <code>className</code>","name":"popoverDropdownProps","required":false,"type":{"name":"Omit<PopoverDropdownProps, \\"children\\">"}},"popoverProps":{"defaultValue":null,"description":"Props passed down to the <code>Popover</code> component. Position, offset, width, and arrowSize accept responsive objects.","name":"popoverProps","required":false,"type":{"name":"ResponsivePopoverProps"}},"revealProps":{"defaultValue":null,"description":"Props passed down to <code>useScrollIntoView()</code> hooks","name":"revealProps","required":false,"type":{"name":"RevealProps"}},"scrollableRef":{"defaultValue":null,"description":"Ref to scrollable element","name":"scrollableRef","required":false,"type":{"name":"RefObject<HTMLDivElement | null>"}},"transitionProps":{"defaultValue":null,"description":"Props passed down to the <code>Transition</code> component that used to animate the Overlay, use to configure duration and animation type, <code>{ duration: 150, transition: \'fade\' }</code> by default","name":"transitionProps","required":false,"type":{"name":"TransitionProps"}},"withOverlay":{"defaultValue":null,"description":"Will render overlay if set to <code>true</code>","name":"withOverlay","required":false,"type":{"name":"boolean"}},"withReveal":{"defaultValue":null,"description":"Indicator if element should be revealed","name":"withReveal","required":false,"type":{"name":"boolean"}}}},"OnboardingTourFocusReveal.Group":{"props":{"children":{"defaultValue":null,"description":"Content","name":"children","required":false,"type":{"name":"React.ReactNode"}},"focusedMode":{"defaultValue":null,"description":"OnboardingTourFocusReveal mode/effects when focused","name":"focusedMode","required":false,"type":{"name":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\"","raw":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\" | undefined","value":[{"value":"undefined"},{"value":"\\"border\\""},{"value":"\\"none\\""},{"value":"\\"elastic\\""},{"value":"\\"glow\\""},{"value":"\\"glow-blue\\""},{"value":"\\"glow-green\\""},{"value":"\\"glow-red\\""},{"value":"\\"pulse\\""},{"value":"\\"rotate\\""},{"value":"\\"scale\\""},{"value":"\\"shake\\""},{"value":"\\"zoom\\""}]}},"overlayProps":{"defaultValue":null,"description":"Props passed down to <code>Overlay</code> component","name":"overlayProps","required":false,"type":{"name":"OverlayProps & ElementProps<\\"div\\">"}},"popoverProps":{"defaultValue":null,"description":"Props passed down to the <code>Popover</code> component. Position, offset, width, and arrowSize accept responsive objects.","name":"popoverProps","required":false,"type":{"name":"ResponsivePopoverProps"}},"transitionProps":{"defaultValue":null,"description":"Props passed down to the <code>Transition</code> component that used to animate the Overlay, use to configure duration and animation type, <code>{ duration: 150, transition: \'fade\' }</code> by default","name":"transitionProps","required":false,"type":{"name":"TransitionProps"}},"withOverlay":{"defaultValue":null,"description":"Will render overlay if set to <code>true</code>","name":"withOverlay","required":false,"type":{"name":"boolean"}},"withReveal":{"defaultValue":null,"description":"Indicator if element should be revealed. Default <code>false</code>","name":"withReveal","required":false,"type":{"name":"boolean"}}}},"OnboardingTourFocusRevealGroup":{"props":{"children":{"defaultValue":null,"description":"Content","name":"children","required":false,"type":{"name":"React.ReactNode"}},"focusedMode":{"defaultValue":null,"description":"OnboardingTourFocusReveal mode/effects when focused","name":"focusedMode","required":false,"type":{"name":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\"","raw":"\\"border\\" | \\"none\\" | \\"elastic\\" | \\"glow\\" | \\"glow-blue\\" | \\"glow-green\\" | \\"glow-red\\" | \\"pulse\\" | \\"rotate\\" | \\"scale\\" | \\"shake\\" | \\"zoom\\" | undefined","value":[{"value":"undefined"},{"value":"\\"border\\""},{"value":"\\"none\\""},{"value":"\\"elastic\\""},{"value":"\\"glow\\""},{"value":"\\"glow-blue\\""},{"value":"\\"glow-green\\""},{"value":"\\"glow-red\\""},{"value":"\\"pulse\\""},{"value":"\\"rotate\\""},{"value":"\\"scale\\""},{"value":"\\"shake\\""},{"value":"\\"zoom\\""}]}},"overlayProps":{"defaultValue":null,"description":"Props passed down to <code>Overlay</code> component","name":"overlayProps","required":false,"type":{"name":"OverlayProps & ElementProps<\\"div\\">"}},"popoverProps":{"defaultValue":null,"description":"Props passed down to the <code>Popover</code> component. Position, offset, width, and arrowSize accept responsive objects.","name":"popoverProps","required":false,"type":{"name":"ResponsivePopoverProps"}},"transitionProps":{"defaultValue":null,"description":"Props passed down to the <code>Transition</code> component that used to animate the Overlay, use to configure duration and animation type, <code>{ duration: 150, transition: \'fade\' }</code> by default","name":"transitionProps","required":false,"type":{"name":"TransitionProps"}},"withOverlay":{"defaultValue":null,"description":"Will render overlay if set to <code>true</code>","name":"withOverlay","required":false,"type":{"name":"boolean"}},"withReveal":{"defaultValue":null,"description":"Indicator if element should be revealed. Default <code>false</code>","name":"withReveal","required":false,"type":{"name":"boolean"}}}}}')},13321,e=>{"use strict";var t=e.i(91398),o=e.i(17819);function n(e,t){return o=>{if("string"!=typeof o||0===o.trim().length)throw Error(t);return`${e}-${o}`}}var r=e.i(47965),i=e.i(23759),a=e.i(75511),s=e.i(46958),l=e.i(6952),d=e.i(91126),c=e.i(17346),u=e.i(91573),p=e.i(23139),h=e.i(80634);let[f,m]=(0,h.f)("Tabs component was not found in the tree");var g={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",tab:"m_4ec4dce6",panel:"m_b0c91715",tabSection:"m_fc420b1f",tabLabel:"m_42bbd1ae","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};let x=(0,u.$)(e=>{let o=(0,d.f)("TabsList",null,e),{children:n,className:r,grow:i,justify:a,classNames:s,styles:l,style:c,mod:u,...h}=o,f=m();return(0,t.jsx)(p.f,{...f.getStyles("list",{className:r,style:c,classNames:s,styles:l,props:o,variant:f.variant}),role:"tablist",variant:f.variant,mod:[{grow:i,orientation:f.orientation,placement:"vertical"===f.orientation&&f.placement,inverted:f.inverted},u],"aria-orientation":f.orientation,__vars:{"--tabs-justify":a},...h,children:n})});x.classes=g,x.displayName="@mantine/core/TabsList";var b=e.i(346),v=e.i(91788);let j=(0,u.$)(e=>{let o=(0,d.f)("TabsPanel",null,e),{children:n,className:r,value:i,classNames:a,styles:s,style:l,mod:c,keepMounted:u,...h}=o,f=(0,b.l)(),g=m();(0,v.useEffect)(()=>(g.setMountedPanel(i,!0),()=>{g.setMountedPanel(i,!1)}),[i]);let x=g.value===i,j=g.keepMounted||u,y="display-none"!==g.keepMountedMode,T=j&&y&&"test"!==f?(0,t.jsx)(v.Activity,{mode:x?"visible":"hidden",children:n}):j||x?n:null;return(0,t.jsx)(p.f,{...g.getStyles("panel",{className:r,classNames:a,styles:s,style:[l,x?void 0:{display:"none"}],props:o}),mod:[{orientation:g.orientation},c],role:"tabpanel",id:g.getPanelId(i),"aria-labelledby":g.getTabId(i),...h,children:T})});function y(e,t){let o=e;for(;(o=o.parentElement)&&!o.matches(t););return o}function T(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].disabled)return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].disabled)return e}return e}function w(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].disabled)return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].disabled)return e}return e}j.classes=g,j.displayName="@mantine/core/TabsPanel";var S=e.i(96859),k=e.i(97046),C=e.i(22046);let O=(0,u.$)(e=>{let o=(0,d.f)("TabsTab",null,e),{className:n,children:r,rightSection:i,leftSection:s,value:l,onClick:c,onKeyDown:u,disabled:p,color:h,style:f,classNames:g,styles:x,vars:b,mod:v,tabIndex:j,...O}=o,R=(0,S.i)(),{dir:N}=(0,k.f)(),P=m(),B=l===P.value,z={classNames:g,styles:x,props:o};return(0,t.jsxs)(C.f,{...P.getStyles("tab",{className:n,style:f,variant:P.variant,...z}),disabled:p,unstyled:P.unstyled,variant:P.variant,mod:[{active:B,disabled:p,orientation:P.orientation,inverted:P.inverted,placement:"vertical"===P.orientation&&P.placement},v],role:"tab",id:P.getTabId(l),"aria-selected":B,tabIndex:void 0!==j?j:B||null===P.value?0:-1,"aria-controls":P.mountedPanels.current.has(l)?P.getPanelId(l):void 0,onClick:e=>{P.onChange(P.allowTabDeactivation&&l===P.value?null:l),c?.(e)},__vars:{"--tabs-color":h?(0,a.f)(h,R):void 0},onKeyDown:function({parentSelector:e,siblingSelector:t,onKeyDown:o,loop:n=!0,activateOnFocus:r=!1,dir:i="rtl",orientation:a}){return s=>{o?.(s);let l=Array.from(y(s.currentTarget,e)?.querySelectorAll(t)||[]).filter(t=>{var o;return o=s.currentTarget,y(o,e)===y(t,e)}),d=l.findIndex(e=>s.currentTarget===e),c=w(d,l,n),u=T(d,l,n),p="rtl"===i?u:c,h="rtl"===i?c:u;switch(s.key){case"ArrowRight":"horizontal"===a&&(s.stopPropagation(),s.preventDefault(),l[p].focus(),r&&l[p].click());break;case"ArrowLeft":"horizontal"===a&&(s.stopPropagation(),s.preventDefault(),l[h].focus(),r&&l[h].click());break;case"ArrowUp":"vertical"===a&&(s.stopPropagation(),s.preventDefault(),l[u].focus(),r&&l[u].click());break;case"ArrowDown":"vertical"===a&&(s.stopPropagation(),s.preventDefault(),l[c].focus(),r&&l[c].click());break;case"Home":s.stopPropagation(),s.preventDefault(),l[w(-1,l,!1)]?.focus();break;case"End":s.stopPropagation(),s.preventDefault(),l[T(l.length,l,!1)]?.focus()}}}({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:P.activateTabWithKeyboard,loop:P.loop,orientation:P.orientation||"horizontal",dir:N,onKeyDown:u}),...O,children:[s&&(0,t.jsx)("span",{...P.getStyles("tabSection",z),"data-position":"left",children:s}),r&&(0,t.jsx)("span",{...P.getStyles("tabLabel",z),children:r}),i&&(0,t.jsx)("span",{...P.getStyles("tabSection",z),"data-position":"right",children:i})]})});O.classes=g,O.displayName="@mantine/core/TabsTab";let R=e=>(e+1)%1e6;var N=e.i(14985),P=e.i(19856);let B="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",z={keepMounted:!0,keepMountedMode:"activity",orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,variant:"default",placement:"left"},D=(0,i.f)((e,{radius:t,color:o,autoContrast:n})=>({root:{"--tabs-radius":(0,r.V)(t),"--tabs-color":(0,a.f)(o,e),"--tabs-text-color":(0,l.f)(n,e)?(0,s.p)({color:o,theme:e,autoContrast:n}):void 0}})),I=(0,u.$)(e=>{let o=(0,d.f)("Tabs",z,e),{defaultValue:r,value:i,onChange:a,orientation:s,children:l,loop:u,id:h,activateTabWithKeyboard:m,allowTabDeactivation:x,variant:b,color:j,radius:y,inverted:T,placement:w,keepMounted:S,keepMountedMode:k,classNames:C,styles:O,unstyled:I,className:_,style:E,vars:F,autoContrast:M,mod:$,attributes:A,...V}=o,L=(0,N.f)(h),W=(0,v.useRef)(new Set),q=function(){let[,e]=(0,v.useReducer)(R,0);return e}(),G=(0,v.useCallback)((e,t)=>{let o=W.current;t&&!o.has(e)?(o.add(e),q()):!t&&o.has(e)&&(o.delete(e),q())},[]),[H,K]=(0,P.f)({value:i,defaultValue:r,finalValue:null,onChange:a}),U=(0,c.f)({name:"Tabs",props:o,classes:g,className:_,style:E,classNames:C,styles:O,unstyled:I,attributes:A,vars:F,varsResolver:D});return(0,t.jsx)(f,{value:{placement:w,value:H,orientation:s,id:L,loop:u,activateTabWithKeyboard:m,getTabId:n(`${L}-tab`,B),getPanelId:n(`${L}-panel`,B),onChange:K,allowTabDeactivation:x,variant:b,color:j,radius:y,inverted:T,keepMounted:S,keepMountedMode:k,unstyled:I,getStyles:U,mountedPanels:W,setMountedPanel:G},children:(0,t.jsx)(p.f,{id:L,variant:b,mod:[{orientation:s,inverted:"horizontal"===s&&T,placement:"vertical"===s&&w},$],...U("root"),...V,children:l})})});I.classes=g,I.varsResolver=D,I.displayName="@mantine/core/Tabs",I.Tab=O,I.Panel=j,I.List=x;var _=e.i(32305);let E=(0,_.f)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]]),F=(0,_.f)("outline","arrow-bar-up","ArrowBarUp",[["path",{d:"M12 4l0 10",key:"svg-0"}],["path",{d:"M12 4l4 4",key:"svg-1"}],["path",{d:"M12 4l-4 4",key:"svg-2"}],["path",{d:"M4 20l16 0",key:"svg-3"}]]),M=(0,_.f)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]]),$=(0,_.f)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]]);var A=e.i(3828),V=e.i(20770),L=e.i(38248),W=e.i(95154);function q({color:e,theme:t,defaultShade:o}){let n=(0,W.f)({color:e,theme:t});return n.isThemeColor?void 0===n.shade?`var(--mantine-color-${n.color}-${o})`:`var(${n.variable})`:e}var G={root:"m_bcb3f3c2"};let H={color:"yellow"},K=(0,i.f)((e,{color:t})=>({root:{"--mark-bg-dark":q({color:t,theme:e,defaultShade:5}),"--mark-bg-light":q({color:t,theme:e,defaultShade:2})}})),U=(0,u.$)(e=>{let o=(0,d.f)("Mark",H,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,color:u,variant:h,attributes:f,...m}=o,g=(0,c.f)({name:"Mark",props:o,className:r,style:i,classes:G,classNames:n,styles:a,unstyled:s,attributes:f,vars:l,varsResolver:K});return(0,t.jsx)(p.f,{component:"mark",variant:h,...g("root"),...m})});function Y(e){return e.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&")}function X(e){return e.normalize("NFD").replace(/\p{M}/gu,"")}U.classes=G,U.varsResolver=K,U.displayName="@mantine/core/Mark";let Z={color:"yellow",wholeWord:!1,caseInsensitive:!0,accentInsensitive:!0},J=(0,V.f)(e=>{let{unstyled:o,children:n,highlight:r,highlightStyles:i,color:a,wholeWord:s,caseInsensitive:l,accentInsensitive:c,...u}=(0,d.f)("Highlight",Z,e),p=Array.isArray(r)&&"object"==typeof r[0],h=new Map,f=e=>{let t=e;return l&&(t=t.toLowerCase()),c&&(t=X(t)),t},m=function(e,t,o={}){if(null==t)return[{chunk:e,highlighted:!1}];let{wholeWord:n=!1,caseInsensitive:r=!0,accentInsensitive:i=!0}=o,a=e=>i?X(Y(e)):Y(e),s=Array.isArray(t)?t.map(a):a(t);if(!(Array.isArray(s)?s.filter(e=>e.trim().length>0).length>0:""!==s.trim()))return[{chunk:e,highlighted:!1}];let l="string"==typeof s?s.trim():s.filter(e=>0!==e.trim().length).map(e=>e.trim()).sort((e,t)=>t.length-e.length).join("|"),d=RegExp(n?`(?<![\\p{L}\\p{N}_])(${l})(?![\\p{L}\\p{N}_])`:`(${l})`,"g"+(r?"i":"")+(n?"u":""));return i?function(e,t){let o,{folded:n,map:r}=function(e){let t="",o=[],n=0;for(;n<e.length;){let r=String.fromCodePoint(e.codePointAt(n)),i=X(r);for(let e=0;e<i.length;e+=1)o.push(n);t+=i,n+=r.length}return o.push(e.length),{folded:t,map:o}}(e),i=[],a=0;for(;null!==(o=t.exec(n));){let n=o.index,s=n+o[0].length,l=r[n],d=r[s];l>a&&i.push({chunk:e.slice(a,l),highlighted:!1}),i.push({chunk:e.slice(l,d),highlighted:!0}),a=d,0===o[0].length&&(t.lastIndex+=1)}return a<e.length&&i.push({chunk:e.slice(a),highlighted:!1}),i.filter(({chunk:e})=>e)}(e,d):e.split(d).map((e,t)=>({chunk:e,highlighted:t%2==1})).filter(({chunk:e})=>e)}(n,p?r.map(e=>(e.color&&h.set(f(e.text),e.color),e.text)):Array.isArray(r)?r:[r],{wholeWord:s,caseInsensitive:l,accentInsensitive:c});return(0,t.jsx)(L.f,{unstyled:o,...u,__staticSelector:"Highlight",children:m.map(({chunk:e,highlighted:n},r)=>n?(0,t.jsx)(U,{unstyled:o,color:h.get(f(e))||a,style:i,"data-highlight":e,children:e},r):(0,t.jsx)("span",{children:e},r))})});J.classes=L.f.classes,J.displayName="@mantine/core/Highlight";var Q=e.i(78593);let[ee,et]=(0,h.f)("Table component was not found in the tree");var eo={table:"m_b23fa0ef",th:"m_4e7aa4f3",tr:"m_4e7aa4fd",td:"m_4e7aa4ef",tbody:"m_b2404537",thead:"m_b242d975",caption:"m_9e5a3ac7",scrollContainer:"m_a100c15",scrollContainerInner:"m_62259741"};function en(e,o){let n=`Table${e.charAt(0).toUpperCase()}${e.slice(1)}`,r=(0,u.$)(r=>{let i=(0,d.f)(n,{},r),{classNames:a,className:s,style:l,styles:c,...u}=i,h=et();return(0,t.jsx)(p.f,{component:e,...function(e,t){if(!t)return;let o={};return t.columnBorder&&e.withColumnBorders&&(o["data-with-column-border"]=!0),t.rowBorder&&e.withRowBorders&&(o["data-with-row-border"]=!0),t.striped&&e.striped&&(o["data-striped"]=e.striped),t.highlightOnHover&&e.highlightOnHover&&(o["data-hover"]=!0),t.captionSide&&e.captionSide&&(o["data-side"]=e.captionSide),t.stickyHeader&&e.stickyHeader&&(o["data-sticky"]=!0),o}(h,o),...h.getStyles(e,{className:s,classNames:a,style:l,styles:c,props:i}),...u})});return r.displayName=`@mantine/core/${n}`,r.classes=eo,r}let er=en("th",{columnBorder:!0}),ei=en("td",{columnBorder:!0}),ea=en("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),es=en("thead",{stickyHeader:!0}),el=en("tbody"),ed=en("tfoot"),ec=en("caption",{captionSide:!0});function eu({data:e}){return(0,t.jsxs)(t.Fragment,{children:[e.caption&&(0,t.jsx)(ec,{children:e.caption}),e.head&&(0,t.jsx)(es,{children:(0,t.jsx)(ea,{children:e.head.map((e,o)=>(0,t.jsx)(er,{children:e},o))})}),e.body&&(0,t.jsx)(el,{children:e.body.map((e,o)=>(0,t.jsx)(ea,{children:e.map((e,o)=>(0,t.jsx)(ei,{children:e},o))},o))}),e.foot&&(0,t.jsx)(ed,{children:(0,t.jsx)(ea,{children:e.foot.map((e,o)=>(0,t.jsx)(er,{children:e},o))})})]})}eu.displayName="@mantine/core/TableDataRenderer";var ep=e.i(29100);let eh={type:"scrollarea"},ef=(0,i.f)((e,{minWidth:t,maxHeight:o,type:n})=>({scrollContainer:{"--table-min-width":(0,Q.t)(t),"--table-max-height":(0,Q.t)(o),"--table-overflow":"native"===n?"auto":void 0}})),em=(0,u.$)(e=>{let o=(0,d.f)("TableScrollContainer",eh,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,children:u,minWidth:h,maxHeight:f,type:m,scrollAreaProps:g,attributes:x,...b}=o,v=(0,c.f)({name:"TableScrollContainer",classes:eo,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:x,vars:l,varsResolver:ef,rootSelector:"scrollContainer"});return(0,t.jsx)(p.f,{component:"scrollarea"===m?ep.f:"div",..."scrollarea"===m?f?{offsetScrollbars:"xy",...g}:{offsetScrollbars:"x",...g}:{},...v("scrollContainer"),...b,children:(0,t.jsx)("div",{...v("scrollContainerInner"),children:u})})});em.classes=eo,em.varsResolver=ef,em.displayName="@mantine/core/TableScrollContainer";let eg={withRowBorders:!0,verticalSpacing:7},ex=(0,i.f)((e,{layout:t,captionSide:o,horizontalSpacing:n,verticalSpacing:i,borderColor:s,stripedColor:l,highlightOnHoverColor:d,striped:c,highlightOnHover:u,stickyHeaderOffset:p,stickyHeader:h})=>({table:{"--table-layout":t,"--table-caption-side":o,"--table-horizontal-spacing":(0,r.m)(n),"--table-vertical-spacing":(0,r.m)(i),"--table-border-color":s?(0,a.f)(s,e):void 0,"--table-striped-color":c&&l?(0,a.f)(l,e):void 0,"--table-highlight-on-hover-color":u&&d?(0,a.f)(d,e):void 0,"--table-sticky-header-offset":h?(0,Q.t)(p):void 0}})),eb=(0,u.$)(e=>{let o=(0,d.f)("Table",eg,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,horizontalSpacing:u,verticalSpacing:h,captionSide:f,stripedColor:m,highlightOnHoverColor:g,striped:x,highlightOnHover:b,withColumnBorders:j,withRowBorders:y,withTableBorder:T,borderColor:w,layout:S,data:k,children:C,stickyHeader:O,stickyHeaderOffset:R,mod:N,tabularNums:P,attributes:B,...z}=o,D=(0,c.f)({name:"Table",props:o,className:r,style:i,classes:eo,classNames:n,styles:a,unstyled:s,attributes:B,rootSelector:"table",vars:l,varsResolver:ex,stable:!0}),I=!0===x?"odd":x||void 0,_=f||"bottom",E=(0,v.useMemo)(()=>({getStyles:D,stickyHeader:O,striped:I,highlightOnHover:b,withColumnBorders:j,withRowBorders:y,captionSide:_}),[D,O,I,b,j,y,_]);return(0,t.jsx)(ee,{value:E,children:(0,t.jsx)(p.f,{component:"table",mod:[{withTableBorder:T,tabularNums:P},N],...D("table"),...z,children:C||!!k&&(0,t.jsx)(eu,{data:k})})})});eb.classes=eo,eb.varsResolver=ex,eb.displayName="@mantine/core/Table",eb.Td=ei,eb.Th=er,eb.Tr=ea,eb.Thead=es,eb.Tbody=el,eb.Tfoot=ed,eb.Caption=ec,eb.ScrollContainer=em,eb.DataRenderer=eu;var ev=e.i(82407);function ej({errorOf:e}){return(0,t.jsxs)(L.f,{children:[(0,t.jsxs)(L.f,{span:!0,c:"red",children:["Error loading component ",e," data."," "]}),"If you see this message please let us know by"," ",(0,t.jsx)(ev.f,{href:"https://github.com/mantinedev/mantine/issues/new?assignees=&labels=&template=docs_report.yml",target:"_blank",children:"opening an issue on GitHub"}),"."]})}var ey=e.i(56206),eT=e.i(31434);function ew({className:e,...o}){return(0,t.jsx)(L.f,{component:"span",className:(0,ey.f)(eT.default.code,e),...o})}function eS({component:e,query:o,data:n}){if(!n[e])return(0,t.jsx)(ej,{errorOf:"props"});let r=Object.keys(n[e].props).filter(t=>n[e].props[t].name.toLowerCase().includes(o.toLowerCase().trim())).map(r=>{let i=n[e].props[r];return(0,t.jsxs)(eb.Tr,{children:[(0,t.jsxs)(eb.Td,{style:{whiteSpace:"nowrap"},children:[(0,t.jsx)(J,{highlight:o,component:"span",fz:"sm",children:i.name}),i.required&&(0,t.jsxs)(L.f,{component:"sup",c:"red",fz:"xs",children:[" ","*"]})]}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ew,{children:i.type.name})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(L.f,{fz:"sm",dangerouslySetInnerHTML:{__html:i.description}})})]},r)});return 0===r.length?(0,t.jsx)(L.f,{c:"dimmed",mb:"xl",fz:"sm",children:"Nothing found"}):(0,t.jsx)(eb.ScrollContainer,{minWidth:800,children:(0,t.jsxs)(eb,{layout:"fixed",children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{w:210,children:"Name"}),(0,t.jsx)(eb.Th,{w:310,children:"Type"}),(0,t.jsx)(eb.Th,{children:"Description"})]})}),(0,t.jsx)(eb.Tbody,{children:r})]})})}var ek=e.i(83141),eC=e.i(3641);let eO=(0,v.createContext)({size:"sm"});var eR=e.i(77313);function eN({size:e="var(--cb-icon-size, 70%)",style:o,...n}){return(0,t.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...o,width:e,height:e},...n,children:(0,t.jsx)("path",{d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}eN.displayName="@mantine/core/CloseIcon";var eP={root:"m_86a44da5","root--subtle":"m_220c80f2"};let eB={variant:"subtle"},ez=(0,i.f)((e,{size:t,radius:o,iconSize:n})=>({root:{"--cb-size":(0,r.K)(t,"cb-size"),"--cb-radius":void 0===o?void 0:(0,r.V)(o),"--cb-icon-size":(0,Q.t)(n)}})),eD=(0,V.f)(e=>{let o=(0,d.f)("CloseButton",eB,e),{iconSize:n,children:r,vars:i,radius:a,className:s,classNames:l,style:u,styles:p,unstyled:h,"data-disabled":f,disabled:m,variant:g,icon:x,mod:b,attributes:v,__staticSelector:j,...y}=o,T=(0,c.f)({name:j||"CloseButton",props:o,className:s,style:u,classes:eP,classNames:l,styles:p,unstyled:h,attributes:v,vars:i,varsResolver:ez});return(0,t.jsxs)(C.f,{...y,unstyled:h,variant:g,disabled:m,mod:[{disabled:m||f},b],...T("root",{variant:g,active:!m&&!f}),children:[x||(0,t.jsx)(eN,{}),r]})});eD.classes=eP,eD.varsResolver=ez,eD.displayName="@mantine/core/CloseButton";let eI=(0,u.$)(e=>{let o=(0,d.f)("InputClearButton",null,e),{size:n,variant:r,vars:i,classNames:a,styles:s,...l}=o,c=(0,v.use)(eO),{resolvedClassNames:u,resolvedStyles:p}=(0,eR.f)({classNames:a,styles:s,props:o});return(0,t.jsx)(eD,{variant:r||"transparent",size:n||c?.size||"sm",classNames:u,styles:p,__staticSelector:"InputClearButton",style:{pointerEvents:"all",background:"var(--input-bg)",...l.style},...l})});eI.displayName="@mantine/core/InputClearButton";let e_={xs:7,sm:8,md:10,lg:12,xl:15},eE=(0,v.createContext)({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var eF={wrapper:"m_6c018570",input:"m_8fb7ebe7",bottomSection:"m_93f4ed57",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",success:"m_9d9d40e0",description:"m_fe47ce59"};let eM=(0,i.f)((e,{size:t})=>({description:{"--input-description-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`}})),e$=(0,u.$)(e=>{let o=(0,d.f)("InputDescription",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,__staticSelector:u,__inheritStyles:h=!0,attributes:f,...m}=(0,d.f)("InputDescription",null,o),g=(0,v.use)(eE),x=(0,c.f)({name:["InputWrapper",u],props:o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:f,rootSelector:"description",vars:l,varsResolver:eM}),b=h&&g?.getStyles||x;return(0,t.jsx)(p.f,{component:"p",...b("description",g?.getStyles?{className:r,style:i}:void 0),...m})});e$.classes=eF,e$.varsResolver=eM,e$.displayName="@mantine/core/InputDescription";let eA=(0,i.f)((e,{size:t})=>({error:{"--input-error-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`}})),eV=(0,u.$)(e=>{let o=(0,d.f)("InputError",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,attributes:u,__staticSelector:h,__inheritStyles:f=!0,...m}=o,g=(0,c.f)({name:["InputWrapper",h],props:o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:u,rootSelector:"error",vars:l,varsResolver:eA}),x=(0,v.use)(eE),b=f&&x?.getStyles||g;return(0,t.jsx)(p.f,{component:"p",...b("error",x?.getStyles?{className:r,style:i}:void 0),...m})});eV.classes=eF,eV.varsResolver=eA,eV.displayName="@mantine/core/InputError";let eL={labelElement:"label"},eW=(0,i.f)((e,{size:t})=>({label:{"--input-label-size":(0,r.o)(t),"--input-asterisk-color":void 0}})),eq=(0,u.$)(e=>{let o=(0,d.f)("InputLabel",eL,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,labelElement:u,required:h,htmlFor:f,onMouseDown:m,children:g,__staticSelector:x,mod:b,attributes:j,...y}=o,T=(0,c.f)({name:["InputWrapper",x],props:o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:j,rootSelector:"label",vars:l,varsResolver:eW}),w=(0,v.use)(eE),S=w?.getStyles||T,k=y.component||u;return(0,t.jsxs)(p.f,{...S("label",w?.getStyles?{className:r,style:i}:void 0),component:u,htmlFor:"string"!=typeof k||"label"===k?f:void 0,mod:[{required:h},b],onMouseDown:e=>{m?.(e),!e.defaultPrevented&&e.detail>1&&e.preventDefault()},...y,children:[g,h&&(0,t.jsx)("span",{...S("required"),"aria-hidden":!0,children:" *"})]})});eq.classes=eF,eq.varsResolver=eW,eq.displayName="@mantine/core/InputLabel";let eG=(0,u.$)(e=>{let o=(0,d.f)("InputPlaceholder",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,__staticSelector:u,error:h,mod:f,attributes:m,...g}=o,x=(0,c.f)({name:["InputPlaceholder",u],props:o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:m,rootSelector:"placeholder"});return(0,t.jsx)(p.f,{...x("placeholder"),mod:[{error:!!h},f],component:"span",...g})});eG.classes=eF,eG.displayName="@mantine/core/InputPlaceholder";let eH=(0,i.f)((e,{size:t})=>({success:{"--input-success-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`}})),eK=(0,u.$)(e=>{let o=(0,d.f)("InputSuccess",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,attributes:u,__staticSelector:h,__inheritStyles:f=!0,...m}=o,g=(0,c.f)({name:["InputWrapper",h],props:o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:u,rootSelector:"success",vars:l,varsResolver:eH}),x=(0,v.use)(eE),b=f&&x?.getStyles||g;return(0,t.jsx)(p.f,{component:"p",...b("success",x?.getStyles?{className:r,style:i}:void 0),...m})});eK.classes=eF,eK.varsResolver=eH,eK.displayName="@mantine/core/InputSuccess";let eU={labelElement:"label",inputContainer:e=>e,inputWrapperOrder:["label","description","input","error"]},eY=(0,i.f)((e,{size:t})=>({label:{"--input-label-size":(0,r.o)(t),"--input-asterisk-color":void 0},error:{"--input-error-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`},success:{"--input-success-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`},description:{"--input-description-size":void 0===t?void 0:`calc(${(0,r.o)(t)} - ${(0,Q.t)(2)})`}})),eX=(0,u.$)(e=>{let o=(0,d.f)("InputWrapper",eU,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,size:u,variant:h,__staticSelector:f,inputContainer:m,inputWrapperOrder:g,label:x,error:b,success:j,description:y,labelProps:T,descriptionProps:w,errorProps:S,successProps:k,labelElement:C,children:O,withAsterisk:R,id:P,required:B,__stylesApiProps:z,mod:D,attributes:I,..._}=o,E=(0,c.f)({name:["InputWrapper",f],props:z||o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:I,vars:l,varsResolver:eY}),F={size:u,variant:h,__staticSelector:f},M=(0,N.f)(P),$=S?.id||`${M}-error`,A=k?.id||`${M}-success`,V=w?.id||`${M}-description`,L=!!b&&"boolean"!=typeof b,W=!!j&&"boolean"!=typeof j&&!b,q=!!y,G=L&&g.includes("error"),H=W&&g.includes("error"),K=q&&g.includes("description"),U=`${G?$:""} ${H?A:""} ${K?V:""}`,Y=U.trim().length>0?U.trim():void 0,X=T?.id||`${M}-label`,Z=x&&(0,t.jsx)(eq,{labelElement:C,id:X,htmlFor:M,required:"boolean"==typeof R?R:B,...F,...T,children:x},"label"),J=q&&(0,t.jsx)(e$,{...w,...F,size:w?.size||F.size,id:w?.id||V,children:y},"description"),Q=(0,t.jsx)(v.Fragment,{children:m(O)},"input"),ee=L&&(0,v.createElement)(eV,{...S,...F,size:S?.size||F.size,key:"error",id:S?.id||$},b),et=W&&(0,v.createElement)(eK,{...k,...F,size:k?.size||F.size,key:"success",id:k?.id||A},j),eo=g.map(e=>{switch(e){case"label":return Z;case"input":return Q;case"description":return J;case"error":return ee||et;default:return null}});return(0,t.jsx)(eE,{value:{getStyles:E,describedBy:Y,inputId:M,labelId:Z&&g.includes("label")?X:void 0,...function(e,{hasDescription:t,hasError:o}){let n=e.findIndex(e=>"input"===e),r=e.slice(0,n),i=e.slice(n+1),a=t&&r.includes("description")||o&&r.includes("error");return{offsetBottom:t&&i.includes("description")||o&&i.includes("error"),offsetTop:a}}(g,{hasDescription:q,hasError:L||W})},children:(0,t.jsx)(p.f,{variant:h,size:u,mod:[{error:!!b,success:!!j&&!b},D],id:"label"===C?void 0:P,...E("root"),..._,children:eo})})});eX.classes=eF,eX.varsResolver=eY,eX.displayName="@mantine/core/InputWrapper";let eZ={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0,withSuccessStyles:!0,size:"sm",loading:!1,loadingPosition:"right"},eJ=(0,i.f)((e,t,o)=>({wrapper:{"--input-margin-top":o.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":o.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":(0,r.K)(t.size,"input-height"),"--input-fz":(0,r.o)(t.size),"--input-radius":void 0===t.radius?void 0:(0,r.V)(t.radius),"--input-left-section-width":void 0!==t.leftSectionWidth?(0,Q.t)(t.leftSectionWidth):void 0,"--input-right-section-width":void 0!==t.rightSectionWidth?(0,Q.t)(t.rightSectionWidth):void 0,"--input-padding-y":t.multiline?(0,r.K)(t.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":t.leftSectionPointerEvents,"--input-right-section-pointer-events":t.rightSectionPointerEvents}})),eQ=(0,V.f)(e=>{let o=(0,d.f)("Input",eZ,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,required:l,__staticSelector:u,__stylesApiProps:h,size:f,wrapperProps:m,error:g,success:x,disabled:b,leftSection:j,leftSectionProps:y,leftSectionWidth:T,rightSection:w,rightSectionProps:S,rightSectionWidth:k,rightSectionPointerEvents:C,leftSectionPointerEvents:O,variant:R,vars:N,pointer:P,multiline:B,radius:z,id:D,withAria:I,withErrorStyles:_,withSuccessStyles:E,mod:F,inputSize:M,attributes:$,__clearSection:A,__clearable:V,__clearSectionMode:L,__defaultRightSection:W,loading:q,loadingPosition:G,__bottomSection:H,__bottomSectionProps:K,rootRef:U,dir:Y,...X}=o,{styleProps:Z,rest:J}=(0,ek.f)(X),Q=(0,v.use)(eE),ee={offsetBottom:Q?.offsetBottom,offsetTop:Q?.offsetTop},et=(0,c.f)({name:["Input",u],props:h||o,classes:eF,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:$,stylesCtx:ee,rootSelector:"wrapper",vars:N,varsResolver:eJ}),eo=I?{required:l,disabled:b,"aria-invalid":!!g||void 0,"aria-describedby":Q?.describedBy,id:Q?.inputId||D}:{},en=q?(0,t.jsx)(eC.f,{size:"left"===G?"calc(var(--input-left-section-size) / 2)":"calc(var(--input-right-section-size) / 2)"}):null,er=q&&"left"===G?en:j,ei=function({__clearable:e,__clearSection:o,rightSection:n,__defaultRightSection:r,size:i="sm",__clearSectionMode:a="both"}){let s=e&&o;return"rightSection"===a?null===n?null:n||r:"clear"===a?null===n?null:s||r:s&&(n||r)?(0,t.jsxs)("div",{"data-combined-clear-section":!0,style:{display:"flex",gap:2,alignItems:"center",paddingInlineEnd:e_[i]},children:[s,n||r]}):null===n?null:n||s||r}({__clearable:V,__clearSection:A,rightSection:q&&"right"===G?en:w,__defaultRightSection:W,size:f,__clearSectionMode:L});return(0,t.jsx)(eO,{value:{size:f||"sm"},children:(0,t.jsxs)(p.f,{ref:U,dir:Y,...et("wrapper"),...Z,...m,mod:[{error:!!g&&_,success:!!x&&!g&&E,pointer:P,disabled:b,multiline:B,withRightSection:!!ei,withLeftSection:!!er,withBottomSection:!!H},F],variant:R,size:f,children:[er&&(0,t.jsx)("div",{...y,"data-position":"left",...et("section",{className:y?.className,style:y?.style}),children:er}),(0,t.jsx)(p.f,{component:"input",...J,...eo,required:l,mod:{disabled:b,error:!!g&&_,success:!!x&&!g&&E},variant:R,__size:M,...et("input")}),H&&(0,t.jsx)("div",{...K,...et("bottomSection",{className:K?.className,style:K?.style}),children:H}),ei&&(0,t.jsx)("div",{...S,"data-position":"right",...et("section",{className:S?.className,style:S?.style}),children:ei})]})})});eQ.classes=eF,eQ.varsResolver=eJ,eQ.Wrapper=eX,eQ.Label=eq,eQ.Error=eV,eQ.Success=eK,eQ.Description=e$,eQ.Placeholder=eG,eQ.ClearButton=eI,eQ.displayName="@mantine/core/Input";let e0={__staticSelector:"InputBase",withAria:!0,size:"sm"},e1=(0,V.f)(e=>{let{inputProps:o,wrapperProps:n,...r}=function(e,t,o){let n=(0,d.f)(["Input","InputWrapper",e],t,o),{label:r,description:i,error:a,success:s,required:l,classNames:c,styles:u,className:p,unstyled:h,__staticSelector:f,__stylesApiProps:m,errorProps:g,successProps:x,labelProps:b,descriptionProps:v,wrapperProps:j,id:y,size:T,style:w,inputContainer:S,inputWrapperOrder:k,withAsterisk:C,variant:O,vars:R,mod:N,attributes:P,...B}=n,{styleProps:z,rest:D}=(0,ek.f)(B),I={label:r,description:i,error:a,success:s,required:l,classNames:c,className:p,__staticSelector:f,__stylesApiProps:m||n,errorProps:g,successProps:x,labelProps:b,descriptionProps:v,unstyled:h,styles:u,size:T,style:w,inputContainer:S,inputWrapperOrder:k,withAsterisk:C,variant:O,id:y,mod:N,attributes:P,...j};return{...D,classNames:c,styles:u,unstyled:h,wrapperProps:{...I,...z},inputProps:{required:l,classNames:c,styles:u,unstyled:h,size:T,__staticSelector:f,__stylesApiProps:m||n,error:a,success:s,variant:O,id:y,attributes:P}}}("InputBase",e0,e);return(0,t.jsx)(eQ.Wrapper,{...n,children:(0,t.jsx)(eQ,{...o,...r})})});e1.classes={...eQ.classes,...eQ.Wrapper.classes},e1.displayName="@mantine/core/InputBase";let e2=(0,u.$)(e=>{let o=(0,d.f)(["Input","InputWrapper","TextInput"],null,e);return(0,t.jsx)(e1,{component:"input",...o,__staticSelector:"TextInput"})});e2.classes=e1.classes,e2.displayName="@mantine/core/TextInput";var e3=e.i(49564),e4=e.i(55004);function e5({component:e,componentPrefix:t}){return t?t===e?e:`${t}.${e.replace(t,"")}`:e}var e9=e.i(31052);function e6({components:e,componentPrefix:o,data:n}){let[r,i]=(0,v.useState)(""),a=e.map(e=>(0,t.jsxs)("div",{className:e9.default.section,children:[(0,t.jsxs)(e3.f,{order:2,className:e9.default.title,children:[e5({component:e,componentPrefix:o})," component props"]}),(0,t.jsx)(eS,{component:e,query:r,data:n})]},e));return(0,t.jsxs)("div",{className:e9.default.root,children:[(0,t.jsx)(e2,{className:e9.default.search,value:r,onChange:e=>i(e.currentTarget.value),leftSection:(0,t.jsx)(e4.f,{className:e9.default.searchIcon}),placeholder:"Search props",radius:"md",size:"lg",autoFocus:!0}),a]})}function e8({data:e,fixedLayout:o=!0,...n}){let r=e.modifiers?.some(e=>!!e.condition),i=e.modifiers?.some(e=>!!e.value),a=e.modifiers?.map((e,o)=>(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:Array.isArray(e.selector)?e.selector.join(", "):e.selector}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ew,{children:e.modifier})}),r&&(0,t.jsx)(eb.Td,{children:(0,t.jsx)(L.f,{fz:"sm",children:e.condition||"–"})}),i&&(0,t.jsx)(eb.Td,{children:(0,t.jsx)(L.f,{fz:"sm",children:e.value||"–"})})]},o))||[];return(0,t.jsx)(eb.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(eb,{layout:o?"fixed":void 0,...n,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{w:o?210:void 0,children:"Selector"}),(0,t.jsx)(eb.Th,{w:o?310:void 0,children:"Attribute"}),r&&(0,t.jsx)(eb.Th,{children:"Condition"}),i&&(0,t.jsx)(eb.Th,{children:"Value"})]})}),(0,t.jsx)(eb.Tbody,{children:a})]})})}function e7({data:e,component:o,fixedLayout:n=!0,...r}){let i=Object.keys(e.selectors).map(n=>(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:n}),(0,t.jsx)(eb.Td,{children:(0,t.jsxs)(ew,{children:[".mantine-",o,"-",n]})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(L.f,{fz:"sm",children:e.selectors[n]})})]},n));return(0,t.jsx)(eb.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(eb,{layout:n?"fixed":void 0,...r,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{w:n?210:void 0,children:"Selector"}),(0,t.jsx)(eb.Th,{w:n?310:void 0,children:"Static selector"}),(0,t.jsx)(eb.Th,{children:"Description"})]})}),(0,t.jsx)(eb.Tbody,{children:i})]})})}function te({data:e,fixedLayout:o=!0,...n}){let r=Object.keys(e.vars).reduce((o,n)=>(Object.keys(e.vars[n]).forEach((r,i)=>{o.push((0,t.jsxs)(eb.Tr,{children:[0===i&&(0,t.jsx)(eb.Td,{rowSpan:Object.keys(e.vars[n]).length,children:n}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ew,{children:r})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(L.f,{fz:"sm",children:e.vars[n][r]})})]},`${n}-${r}`))}),o),[]);return(0,t.jsx)(eb.ScrollContainer,{minWidth:600,children:(0,t.jsxs)(eb,{layout:o?"fixed":void 0,...n,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{w:o?210:void 0,children:"Selector"}),(0,t.jsx)(eb.Th,{w:o?310:void 0,children:"Variable"}),(0,t.jsx)(eb.Th,{children:"Description"})]})}),(0,t.jsx)(eb.Tbody,{children:r})]})})}var tt=e.i(80104);function to({component:e,componentPrefix:o,data:n}){if(!n)return(0,t.jsx)(ej,{errorOf:"Styles API"});let r=e5({component:e,componentPrefix:o});return(0,t.jsxs)("div",{className:tt.default.root,children:[(0,t.jsxs)("div",{className:tt.default.section,children:[(0,t.jsxs)(e3.f,{order:2,className:tt.default.title,children:[r," selectors"]}),(0,t.jsx)(e7,{component:e,data:n})]}),Object.keys(n.vars).length>0&&(0,t.jsxs)("div",{className:tt.default.section,children:[(0,t.jsxs)(e3.f,{order:2,className:tt.default.title,children:[r," CSS variables"]}),(0,t.jsx)(te,{data:n})]}),Array.isArray(n.modifiers)&&n.modifiers.length>0&&(0,t.jsxs)("div",{className:tt.default.section,children:[(0,t.jsxs)(e3.f,{order:2,className:tt.default.title,children:[r," data attributes"]}),(0,t.jsx)(e8,{data:n})]})]})}var tn={root:"m_b183c0a2"};let tr=(0,i.f)((e,{color:t})=>({root:{"--code-bg":t?(0,a.f)(t,e):void 0}})),ti=(0,u.$)(e=>{let o=(0,d.f)("Code",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,color:u,block:h,mod:f,attributes:m,...g}=o,x=(0,c.f)({name:"Code",props:o,classes:tn,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:m,vars:l,varsResolver:tr});return(0,t.jsx)(p.f,{component:h?"pre":"code",mod:[{block:h},f],...x("root"),...g,dir:"ltr"})});ti.classes=tn,ti.varsResolver=tr,ti.displayName="@mantine/core/Code";var ta=e.i(72369);let[ts,tl]=(0,h.f)("CodeHighlightProvider was not found in the component tree");var td=e.i(42294),tc=e.i(2363);let tu=(0,V.f)(e=>{let{children:o,vars:n,tooltipLabel:r,...i}=(0,d.f)("CodeHighlightControl",null,e),a=tl(),s=a.getStyles("controlTooltip"),l=(0,t.jsx)(td.f,{...a.getStyles("control"),...i,variant:"none","data-code-color-scheme":a.codeColorScheme,children:o});return r?(0,t.jsx)(tc.f,{label:r,fz:"sm",position:"bottom",classNames:{tooltip:s.className},styles:{tooltip:s.style},"data-code-color-scheme":a.codeColorScheme,transitionProps:{duration:0},children:l}):l});function tp({copied:e,...o}){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...o,children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M5 12l5 5l10 -10"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"}),(0,t.jsx)("path",{d:"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"})]})})}function th({code:e,copyLabel:o="Copy",copiedLabel:n="Copied"}){let r=function(e={}){let t=e.timeout??2e3,[o,n]=(0,v.useState)(null),[r,i]=(0,v.useState)(!1),a=(0,v.useRef)(null);return(0,v.useEffect)(()=>()=>{window.clearTimeout(a.current)},[]),{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>{n(null),window.clearTimeout(a.current),a.current=window.setTimeout(()=>i(!1),t),i(!0)}).catch(e=>n(e)):n(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{i(!1),n(null),window.clearTimeout(a.current)},error:o,copied:r}}();return(0,t.jsx)(tu,{onClick:()=>r.copy(e),variant:"none",tooltipLabel:r.copied?n:o,"aria-label":r.copied?n:`${o} code`,children:(0,t.jsx)(tp,{copied:r.copied})})}function tf({expanded:e,style:o,...n}){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",...n,children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 13v-8l-3 3m6 0l-3 -3"}),(0,t.jsx)("path",{d:"M9 17l1 0"}),(0,t.jsx)("path",{d:"M14 17l1 0"}),(0,t.jsx)("path",{d:"M19 17l1 0"}),(0,t.jsx)("path",{d:"M4 17l1 0"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,t.jsx)("path",{d:"M12 11v8l3 -3m-6 0l3 3"}),(0,t.jsx)("path",{d:"M9 7l1 0"}),(0,t.jsx)("path",{d:"M14 7l1 0"}),(0,t.jsx)("path",{d:"M19 7l1 0"}),(0,t.jsx)("path",{d:"M4 7l1 0"})]})})}function tm({expanded:e,onExpand:o,expandCodeLabel:n="Expand code",collapseCodeLabel:r="Collapse code"}){return(0,t.jsx)(tu,{onClick:()=>o(!e),tooltipLabel:e?r:n,"aria-label":e?r:n,children:(0,t.jsx)(tf,{expanded:e})})}tu.displayName="@mantine/code-highlight/CodeHighlightControl",tp.displayName="@mantine/code-highlight/CopyIcon",th.displayName="@mantine/code-highlight/CopyCodeButton",tf.displayName="@mantine/code-highlight/ExpandIcon",tm.displayName="@mantine/code-highlight/ExpandCodeButton";var tg={root:"m_5cb1b9c8",codeHighlight:"m_e597c321",inlineCodeHighlight:"m_dfe9c588",pre:"m_2c47c4fd",code:"m_5caae6d3",controls:"m_be7e9c9c",control:"m_d498bab7",controlTooltip:"m_4c3d814c",codeWrapper:"m_9f507240",lineNumbers:"m_15f77410",scrollarea:"m_f744fd40",showCodeButton:"m_c9378bc2",file:"m_5cac2e62",fileIcon:"m_b46cddfb",filesScrollarea:"m_7b14120b",files:"m_38d99e51"},tx=e.i(88399);let tb={withCopyButton:!0,expandCodeLabel:"Expand code",collapseCodeLabel:"Collapse code"},tv=(0,i.f)((e,{maxCollapsedHeight:t,background:o,radius:n})=>({codeHighlight:{"--ch-max-height":(0,Q.t)(t),"--ch-background":o?(0,a.f)(o,e):void 0,"--ch-radius":void 0!==n?(0,r.V)(n):void 0}})),tj=(0,u.$)(e=>{let o=(0,d.f)("CodeHighlight",tb,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,code:u,copiedLabel:h,copyLabel:f,defaultExpanded:m,expanded:g,onExpandedChange:x,maxCollapsedHeight:b,withCopyButton:j,withExpandButton:y,expandCodeLabel:T,collapseCodeLabel:w,radius:S,background:k,withBorder:O,withLineNumbers:R,controls:N,language:B,codeColorScheme:z,withFirstLineIndentation:D,__withOffset:I,__inline:_,__staticSelector:E,attributes:F,...M}=o,$=(0,c.f)({name:E||"CodeHighlight",classes:tg,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:F,vars:l,varsResolver:tv,rootSelector:"codeHighlight"}),[A,V]=(0,P.f)({value:g,defaultValue:m,finalValue:!0,onChange:x}),L=N&&N.length>0||y||j,W=(0,tx.f)(),q=(0,ta.s)(),G=(0,ta.N)(),H=(0,ta.L)();(0,v.useEffect)(()=>{G(B)},[B,G]);let K=function(e,{withFirstLineIndentation:t}={}){return t?e.replace(/^(?:[^\S\r\n]*\r?\n)+/,"").trimEnd():e.trim()}(u,{withFirstLineIndentation:D}),U=z??W,Y=H(B),X=(0,v.useMemo)(()=>q({code:K,language:B,colorScheme:U}),[q,K,B,U,Y]),Z=X.isHighlighted?{dangerouslySetInnerHTML:{__html:X.highlightedCode}}:{children:K};return _?(0,t.jsx)(p.f,{component:"code",...M,...X.codeElementProps,...$("codeHighlight",{className:(0,ey.f)(X.codeElementProps?.className,r),style:[{...X.codeElementProps?.style},i]}),"data-with-border":O||void 0,...Z}):(0,t.jsx)(ts,{value:{getStyles:$,codeColorScheme:z},children:(0,t.jsxs)(p.f,{...$("codeHighlight"),...M,dir:"ltr","data-code-color-scheme":z,"data-with-border":O||void 0,children:[L&&(0,t.jsxs)("div",{...$("controls"),"data-with-offset":I||void 0,children:[N,y&&(0,t.jsx)(tm,{expanded:A,onExpand:V,expandCodeLabel:T,collapseCodeLabel:w}),j&&(0,t.jsx)(th,{code:K,copiedLabel:h,copyLabel:f})]}),(0,t.jsx)(ep.f,{type:"hover",scrollbarSize:4,dir:"ltr",offsetScrollbars:!1,"data-collapsed":!A||void 0,styles:{viewport:{overscrollBehaviorInline:"none"}},...$("scrollarea"),children:(0,t.jsxs)("div",{...$("codeWrapper"),children:[R&&(0,t.jsx)("div",{...$("lineNumbers"),"data-with-offset":I||void 0,children:K.split("\n").map((e,o)=>(0,t.jsx)("div",{children:o+1},o))}),(0,t.jsx)("pre",{...$("pre"),"data-with-offset":I||void 0,children:(0,t.jsx)("code",{...X.codeElementProps,...$("code",{className:X.codeElementProps?.className,style:X.codeElementProps?.style}),...Z})})]})}),(0,t.jsx)(C.f,{...$("showCodeButton"),mod:{hidden:A},onClick:()=>V(!0),"data-code-color-scheme":z,children:T})]})})});tj.displayName="@mantine/code-highlight/CodeHighlight",tj.classes=tg,tj.varsResolver=tv,tj.Control=tu;var ty=e.i(18475);function tT({withPadding:e=!0,overflow:o,centered:n,maxWidth:r,minHeight:i,children:a,dimmed:s,striped:l}){return(0,t.jsx)(p.f,{className:"m_a3c6e060",style:{overflow:o},mod:{"with-padding":e,centered:n,dimmed:s,striped:l},__vars:{"--demo-flex":r?"1":void 0,"--demo-max-width":r?(0,Q.t)(r):void 0,"--demo-min-height":i?(0,Q.t)(i):void 0,"--demo-margin-y":r&&n?"auto":void 0},children:(0,t.jsx)("div",{className:"m_ad8eb9d6",children:a})})}function tw({fileIcon:e,fileName:o,getFileIcon:n,className:r,style:i}){return e?(0,t.jsx)("span",{className:r,style:i,children:e}):n&&o?(0,t.jsx)("span",{className:r,style:i,children:n(o)}):null}let tS=(0,u.$)(e=>{let o=(0,d.f)("CodeHighlightTabs",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,defaultActiveTab:u,activeTab:h,onTabChange:f,defaultExpanded:m,expanded:g,onExpandedChange:x,code:b,getFileIcon:j,withCopyButton:y,withExpandButton:T,withBorder:w,radius:S,maxCollapsedHeight:k,copyLabel:O,copiedLabel:R,expandCodeLabel:N,collapseCodeLabel:B,background:z,controls:D,codeColorScheme:I,withLineNumbers:_,withFirstLineIndentation:E,attributes:F,...M}=o,$=(0,c.f)({name:"CodeHighlightTabs",classes:tg,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:F,vars:l}),[A,V]=(0,P.f)({defaultValue:u,value:h,finalValue:0,onChange:f}),[L,W]=(0,P.f)({defaultValue:m,value:g,finalValue:!0,onChange:x}),{resolvedClassNames:q,resolvedStyles:G}=(0,eR.f)({classNames:n,styles:a,props:o});if((0,v.useEffect)(()=>{A>=b.length&&V(b.length-1)},[A,b]),b.length<=0)return null;let H=b[A]||{code:"",language:"tsx",fileName:""},K=b.map((e,o)=>(0,v.createElement)(C.f,{...$("file"),key:e.fileName,mod:{active:o===A},onClick:()=>V(o),"data-color-scheme":I},(0,t.jsx)(tw,{fileIcon:e.icon,getFileIcon:j,fileName:e.fileName,...$("fileIcon")},"file-icon"),(0,t.jsx)("span",{children:e.fileName},"file-name")));return(0,t.jsxs)(p.f,{...$("root"),...M,children:[(0,t.jsx)(ep.f,{type:"never",dir:"ltr",offsetScrollbars:!1,...$("filesScrollarea"),children:(0,t.jsx)("div",{...$("files"),children:K})}),(0,t.jsx)(tj,{code:H.code,language:H.language,expanded:L,onExpandedChange:W,withCopyButton:y,withExpandButton:T,withBorder:w,radius:S,maxCollapsedHeight:k,copiedLabel:R,copyLabel:O,expandCodeLabel:N,collapseCodeLabel:B,background:z,controls:D,codeColorScheme:I,withLineNumbers:_,withFirstLineIndentation:E,__withOffset:!0,__staticSelector:"CodeHighlightTabs",classNames:q,styles:G,attributes:F})]})});function tk({size:e,style:o,...n}){return(0,t.jsxs)(p.f,{component:"svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1000 1000",style:[{width:(0,Q.t)(e),height:(0,Q.t)(e)},o],...n,children:[(0,t.jsx)("path",{fill:"#639",d:"M0 0h840a160 160 0 01160 160v680a160 160 0 01-160 160H160A160 160 0 010 840V0z"}),(0,t.jsx)("path",{fill:"#fff",d:"M253 817V649c0-67 43-103 108-103 64-1 104 41 102 112h-74c2-27-10-47-30-46-25 0-32 17-32 49v146c0 31 10 46 32 47 23 0 32-23 30-49h74c4 73-42 116-107 115-63 0-103-35-103-103zm237-12h69c1 32 11 52 33 52s30-13 30-43c0-25-11-39-38-52l-26-12c-46-22-65-49-65-103 0-60 38-102 100-102s95 43 96 113h-67c0-29-6-49-28-49-20 0-30 10-30 35s9 35 33 45l24 11c51 24 73 55 73 113 0 69-39 107-103 107s-100-44-101-115zm226 0h70c0 32 11 52 32 52s30-13 30-43c0-25-10-39-38-52l-26-12c-46-22-64-49-64-103 0-60 37-102 100-102s94 43 96 113h-67c-1-29-7-49-29-49-20 0-29 10-29 35s8 35 32 45l25 11c50 24 72 55 72 113 0 69-39 107-103 107s-100-44-101-115z"})]})}function tC({size:e,style:o,...n}){return(0,t.jsxs)(p.f,{component:"svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",style:[{width:(0,Q.t)(e),height:(0,Q.t)(e)},o],...n,children:[(0,t.jsx)("path",{fill:"#3178C6",d:"M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0z"}),(0,t.jsx)("path",{fill:"#FFF",d:"M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 00-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 017.558 2.719 41.7 41.7 0 016.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0110.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 01-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742z"})]})}function tO(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,t.jsx)(tC,{size:14}):e.endsWith(".css")||e.endsWith(".scss")?(0,t.jsx)(tk,{size:14}):null}tS.displayName="@mantine/code-highlight/CodeHighlightTabs",tS.classes=tg;function tR({code:e,maxCollapsedHeight:o,defaultExpanded:n=!0}){let r="string"==typeof e?[{code:e,fileName:"Demo.tsx",language:"tsx"}]:e;return r?(0,t.jsx)(tS,{code:r,className:"m_66990f0a",getFileIcon:tO,withExpandButton:!0,maxCollapsedHeight:o,defaultExpanded:n}):null}function tN({className:e,...o}){return(0,t.jsx)("div",{className:(0,ey.f)("m_761fa02a",e),...o})}function tP({code:e,children:o,withPadding:n,centered:r,defaultExpanded:i=!0,maxWidth:a,minHeight:s,dimmed:l,striped:d,maxCollapsedHeight:c,overflow:u}){return(0,t.jsxs)(tN,{children:[(0,t.jsx)(tT,{withPadding:n,centered:r,maxWidth:a,minHeight:s,dimmed:l,striped:d,overflow:u,children:o}),(0,t.jsx)(tR,{code:e,defaultExpanded:i,maxCollapsedHeight:c})]})}var tB=e.i(51068);function tz({children:e,withPadding:o,centered:n,maxWidth:r,minHeight:i,title:a,description:s,controls:l,dimmed:d,striped:c,overflow:u,withGrid:p}){return(0,t.jsx)("div",{className:"m_96334675",children:(0,t.jsxs)("div",{className:"m_df4e856a",children:[(0,t.jsx)(tT,{withPadding:o,maxWidth:r,minHeight:i,centered:n,dimmed:d,striped:c,overflow:u,children:e}),(0,t.jsxs)("div",{className:"m_de00ac9",children:[a&&(0,t.jsxs)("div",{className:"m_c4d78f60",children:[(0,t.jsx)(L.f,{fw:500,fz:"sm",mb:5,children:a}),s&&(0,t.jsx)(L.f,{c:"dimmed",fz:11,lh:1.45,children:s})]}),p?(0,t.jsx)(tB.f,{type:"container",cols:{base:1,"480px":2,"780px":4},p:8,children:l}):l]})]})})}var tD={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};function tI({__staticSelector:e,__stylesApiProps:o,className:n,classNames:i,styles:a,unstyled:s,children:l,label:d,description:u,id:h,disabled:f,error:m,size:g,labelPosition:x="left",bodyElement:b="div",labelElement:v="label",variant:j,style:y,vars:T,mod:w,attributes:S,...k}){let C=(0,c.f)({name:e,props:o,className:n,style:y,classes:tD,classNames:i,styles:a,unstyled:s,attributes:S}),O=u?`${h}-description`:void 0,R=m&&"boolean"!=typeof m?`${h}-error`:void 0;return(0,t.jsx)(p.f,{...C("root"),__vars:{"--label-fz":(0,r.o)(g),"--label-lh":(0,r.K)(g,"label-lh")},mod:[{"label-position":x},w],variant:j,size:g,...k,children:(0,t.jsxs)(p.f,{component:b,htmlFor:"label"===b?h:void 0,...C("body"),children:[l,(0,t.jsxs)("div",{...C("labelWrapper"),"data-disabled":f||void 0,children:[d&&(0,t.jsx)(p.f,{component:v,htmlFor:"label"===v?h:void 0,...C("label"),"data-disabled":f||void 0,children:d}),u&&(0,t.jsx)(eQ.Description,{id:O,size:g,__inheritStyles:!1,...C("description"),children:u}),m&&"boolean"!=typeof m&&(0,t.jsx)(eQ.Error,{id:R,size:g,__inheritStyles:!1,...C("error"),children:m})]})]})})}function t_({children:e,role:o}){let n=(0,v.use)(eE);return n?(0,t.jsx)("div",{role:o,"aria-labelledby":n.labelId,"aria-describedby":n.describedBy,children:e}):(0,t.jsx)(t.Fragment,{children:e})}tI.displayName="@mantine/core/InlineInput";let tE=(0,v.createContext)(null),tF={hiddenInputValuesSeparator:","},tM=(0,u.b)(e=>{let{value:o,defaultValue:n,onChange:r,size:i,wrapperProps:a,children:s,readOnly:l,name:c,hiddenInputValuesSeparator:u,hiddenInputProps:p,maxSelectedValues:h,disabled:f,...m}=(0,d.f)("SwitchGroup",tF,e),[g,x]=(0,P.f)({value:o,defaultValue:n,finalValue:[],onChange:r}),b=g.join(u);return(0,t.jsx)(tE,{value:{value:g,onChange:e=>{let t=e.currentTarget.value;if(l)return;let o=g.includes(t);!o&&h&&g.length>=h||x(o?g.filter(e=>e!==t):[...g,t])},size:i,isDisabled:e=>{if(f)return!0;if(!h)return!1;let t=g.includes(e),o=g.length>=h;return!t&&o}},children:(0,t.jsxs)(eQ.Wrapper,{size:i,...a,...m,labelElement:"div",__staticSelector:"SwitchGroup",children:[(0,t.jsx)(t_,{role:"group",children:s}),(0,t.jsx)("input",{type:"hidden",name:c,value:b,...p})]})})});tM.classes=eQ.Wrapper.classes,tM.displayName="@mantine/core/SwitchGroup";var t$={root:"m_5f93f3bb",input:"m_926b4011",track:"m_9307d992",thumb:"m_93039a1d",trackLabel:"m_8277e082"};let tA={labelPosition:"right",withThumbIndicator:!0},tV=(0,i.f)((e,{radius:t,color:o,size:n})=>({root:{"--switch-radius":void 0===t?void 0:(0,r.V)(t),"--switch-height":(0,r.K)(n,"switch-height"),"--switch-width":(0,r.K)(n,"switch-width"),"--switch-thumb-size":(0,r.K)(n,"switch-thumb-size"),"--switch-label-font-size":(0,r.K)(n,"switch-label-font-size"),"--switch-track-label-padding":(0,r.K)(n,"switch-track-label-padding"),"--switch-color":o?(0,a.f)(o,e):void 0}})),tL=(0,u.$)(e=>{let o=(0,d.f)("Switch",tA,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,color:u,label:h,offLabel:f,onLabel:m,id:g,size:x,radius:b,wrapperProps:j,thumbIcon:y,checked:T,defaultChecked:w,onChange:S,labelPosition:k,description:C,error:O,disabled:R,variant:B,rootRef:z,mod:D,withThumbIndicator:I,attributes:_,...E}=o,F=(0,v.use)(tE),M=x||F?.size,$=(0,c.f)({name:"Switch",props:o,classes:t$,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:_,vars:l,varsResolver:tV}),{styleProps:A,rest:V}=(0,ek.f)(E),L=(0,N.f)(g),W=[C?`${L}-description`:void 0,O&&"boolean"!=typeof O?`${L}-error`:void 0,V["aria-describedby"]].filter(Boolean).join(" ")||void 0,q={checked:F?.value.includes(V.value)??T,onChange:e=>{F?.onChange(e),S?.(e)}},G=R||F?.isDisabled?.(V.value),[H,K]=(0,P.f)({value:q.checked??T,defaultValue:w,finalValue:!1});return(0,t.jsxs)(tI,{...$("root"),__staticSelector:"Switch",__stylesApiProps:o,id:L,size:M,labelPosition:k,label:h,description:C,error:O,disabled:G,bodyElement:"label",labelElement:"span",classNames:n,styles:a,unstyled:s,"data-checked":q.checked,variant:B,ref:z,mod:D,attributes:_,inert:V.inert,...A,...j,children:[(0,t.jsx)("input",{...V,...q,disabled:G,checked:H,"data-checked":q.checked,onChange:e=>{q.onChange?.(e),K(e.currentTarget.checked)},id:L,type:"checkbox",role:"switch",inert:V.inert,"aria-describedby":W,...$("input")}),(0,t.jsxs)(p.f,{"aria-hidden":"true",component:"span",mod:{error:O,"label-position":k,"without-labels":!m&&!f},...$("track"),children:[(0,t.jsx)(p.f,{component:"span",mod:{"reduce-motion":!0,"with-thumb-indicator":I&&!y},...$("thumb"),children:y}),(0,t.jsx)("span",{...$("trackLabel"),children:H?m:f})]})]})});function tW(e){return"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}function tq(e){return tW(e.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase())}tL.classes={...t$,...tD},tL.varsResolver=tV,tL.displayName="@mantine/core/Switch",tL.Group=tM;var tG=e.i(6089),tH=e.i(61019),tK=e.i(42144),tU=e.i(31301),tY={root:"m_96b553a6"},tX=e.i(25739),tZ=e.i(4862);let tJ=(0,i.f)((e,{transitionDuration:t},{shouldReduceMotion:o})=>({root:{"--transition-duration":e.respectReducedMotion&&o?"0ms":"number"==typeof t?`${t}ms`:t||"150ms"}})),tQ=(0,u.$)(e=>{let o=(0,d.f)("FloatingIndicator",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,target:u,parent:h,transitionDuration:f,mod:m,displayAfterTransitionEnd:g,onTransitionStart:x,onTransitionEnd:b,attributes:j,ref:y,...T}=o,w=(0,tZ.f)(),S=(0,c.f)({name:"FloatingIndicator",classes:tY,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:j,vars:l,varsResolver:tJ,stylesCtx:{shouldReduceMotion:w}}),k=(0,v.useRef)(null),{initialized:C,hidden:O}=function({target:e,parent:t,ref:o,displayAfterTransitionEnd:n,onTransitionStart:r,onTransitionEnd:i}){let a=(0,v.useRef)(-1),s=(0,v.useRef)(e),[l,d]=(0,v.useState)(!1),[c,u]=(0,v.useState)("boolean"==typeof n&&n),p=()=>{if(!e||!t||!o.current)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=0===t.offsetWidth?1:r.width/t.offsetWidth,a=0===t.offsetHeight?1:r.height/t.offsetHeight,s=window.getComputedStyle(e),l=window.getComputedStyle(t),d=(0,tH.f)(s.borderTopWidth)+(0,tH.f)(l.borderTopWidth),c=(0,tH.f)(s.borderLeftWidth)+(0,tH.f)(l.borderLeftWidth),u={top:(n.top-r.top)/a-d,left:(n.left-r.left)/i-c,width:n.width/i,height:n.height/a};o.current.style.transform=`translateY(${u.top}px) translateX(${u.left}px)`,o.current.style.width=`${u.width}px`,o.current.style.height=`${u.height}px`},h=()=>{window.clearTimeout(a.current),o.current&&(o.current.style.transitionDuration="0ms"),p(),a.current=window.setTimeout(()=>{o.current&&(o.current.style.transitionDuration="")},30)},f=(0,v.useRef)(null),m=(0,v.useRef)(null);return(0,v.useEffect)(()=>{if(l&&s.current!==e&&r&&r(),s.current=e,p(),e)return f.current=new ResizeObserver(h),f.current.observe(e),t&&(m.current=new ResizeObserver(h),m.current.observe(t)),()=>{f.current?.disconnect(),m.current?.disconnect()}},[t,e]),(0,v.useEffect)(()=>{if(t){let e=e=>{(function(e,t){if(!t||!e)return!1;let o=t.parentNode;for(;null!=o;){if(o===e)return!0;o=o.parentNode}return!1})(e.target,t)&&(h(),u(!1))};return t.addEventListener("transitionend",e),()=>{t.removeEventListener("transitionend",e)}}},[t]),(0,v.useEffect)(()=>{if(o.current&&i){let e=e=>{"transform"===e.propertyName&&i()};return o.current.addEventListener("transitionend",e),()=>{o.current?.removeEventListener("transitionend",e)}}},[i]),!function(e,t={autoInvoke:!1}){let o=(0,v.useRef)(null),n=(0,tU.f)(e),r=(0,v.useCallback)((...e)=>{o.current||(o.current=window.setTimeout(()=>{n(...e),o.current=null},20))},[20]),i=(0,v.useCallback)(()=>{o.current&&(window.clearTimeout(o.current),o.current=null)},[]);(0,v.useEffect)(()=>(t.autoInvoke&&r(),i),[i,r])}(()=>{"test"!==(0,tG.f)()&&d(!0)},{autoInvoke:!0}),(0,tK.f)(e=>{e.forEach(e=>{"attributes"===e.type&&"dir"===e.attributeName&&h()})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),{initialized:l,hidden:c}}({target:u,parent:h,ref:k,displayAfterTransitionEnd:g,onTransitionStart:x,onTransitionEnd:b}),R=(0,tX.L)(y,k);return u&&h?(0,t.jsx)(p.f,{ref:R,mod:[{initialized:C,hidden:O},m],...S("root"),...T}):null});tQ.displayName="@mantine/core/FloatingIndicator",tQ.classes=tY,tQ.varsResolver=tJ;var t0={root:"m_cf365364",indicator:"m_9e182ccd",label:"m_1738fcb2",input:"m_1714d588",control:"m_69686b9b",innerLabel:"m_78882f40"};function t1(e,t){let o,n;(0,v.useEffect)(e,(o=(0,v.useRef)([]),n=(0,v.useRef)(0),!function(e,t){if(!e||!t)return!1;if(e===t)return!0;if(e.length!==t.length)return!1;for(let o=0;o<e.length;o+=1)if(!function(e,t){if(e===t||Number.isNaN(e)&&Number.isNaN(t))return!0;if(!(e instanceof Object)||!(t instanceof Object))return!1;let o=Object.keys(e),{length:n}=o;if(n!==Object.keys(t).length)return!1;for(let r=0;r<n;r+=1){let n=o[r];if(!(n in t)||e[n]!==t[n]&&!(Number.isNaN(e[n])&&Number.isNaN(t[n])))return!1}return!0}(e[o],t[o]))return!1;return!0}(o.current,t)&&(o.current=t,n.current+=1),[n.current]))}let t2={withItemsBorders:!0},t3=(0,i.f)((e,{radius:t,color:o,transitionDuration:n,size:i,transitionTimingFunction:s})=>({root:{"--sc-radius":void 0===t?void 0:(0,r.V)(t),"--sc-color":o?(0,a.f)(o,e):void 0,"--sc-shadow":o?void 0:"var(--mantine-shadow-xs)","--sc-transition-duration":void 0===n?void 0:`${n}ms`,"--sc-transition-timing-function":s,"--sc-padding":(0,r.K)(i,"sc-padding"),"--sc-font-size":(0,r.o)(i)}})),t4=(0,u.b)(e=>{let o=(0,d.f)("SegmentedControl",t2,e),{classNames:n,className:r,style:i,styles:a,unstyled:l,vars:u,data:h,value:f,defaultValue:m,onChange:g,size:x,name:b,disabled:j,readOnly:y,fullWidth:T,orientation:w,radius:k,color:C,transitionDuration:O,transitionTimingFunction:R,variant:B,autoContrast:z,withItemsBorders:D,mod:I,attributes:_,ref:E,...F}=o,M=(0,c.f)({name:"SegmentedControl",props:o,classes:t0,className:r,style:i,classNames:n,styles:a,unstyled:l,attributes:_,vars:u,varsResolver:t3}),$=(0,S.i)(),A=h.map(e=>"string"==typeof e||"number"==typeof e||"boolean"==typeof e||"bigint"==typeof e?{label:`${e}`,value:e}:e),V=function(){let[e,t]=(0,v.useState)(!1);return(0,v.useEffect)(()=>t(!0),[]),e}(),[L,W]=(0,v.useState)(0),[q,G]=(0,v.useState)(null),[H,K]=(0,v.useState)({}),[U,Y]=(0,P.f)({value:f,defaultValue:m,finalValue:Array.isArray(h)?A.find(e=>!e.disabled)?.value??h[0]?.value??null:null,onChange:g}),X=(0,N.f)(b),Z=A.map(e=>`${e.value}`),J=A.map(e=>(0,v.createElement)(p.f,{...M("control"),mod:{active:U===e.value,orientation:w},key:`${e.value}`},(0,v.createElement)("input",{...M("input"),disabled:j||e.disabled,type:"radio",name:X,value:`${e.value}`,id:`${X}-${e.value}`,checked:U===e.value,onChange:()=>!y&&Y(e.value),"data-focus-ring":$.focusRing,key:`${e.value}-input`}),(0,v.createElement)(p.f,{component:"label",...M("label"),mod:{active:U===e.value&&!(j||e.disabled),disabled:j||e.disabled,"read-only":y},htmlFor:`${X}-${e.value}`,ref:t=>{var o;return o=`${e.value}`,void(null!==t&&H[o]!==t&&(H[o]=t,K({...H})))},__vars:{"--sc-label-color":void 0!==C?(0,s.p)({color:C,theme:$,autoContrast:z}):void 0},key:`${e.value}-label`},(0,t.jsx)("span",{...M("innerLabel"),children:e.label})))),Q=(0,tX.L)(E,G);return(t1(()=>{W(e=>e+1)},[h.length]),t1(()=>{K(e=>{let t={};return Z.forEach(o=>{o in e&&(t[o]=e[o])}),Object.keys(t).length===Object.keys(e).length?e:t})},[Z]),0===h.length)?null:(0,t.jsxs)(p.f,{...M("root"),variant:B,size:x,ref:Q,mod:[{"full-width":T,orientation:w,initialized:V,"with-items-borders":D},I],...F,role:"radiogroup","data-disabled":j,children:[void 0!==U&&(0,t.jsx)(tQ,{target:H[`${U}`],parent:q,component:"span",transitionDuration:"var(--sc-transition-duration)",...M("indicator")},L),J]})});function t5(e){return e.map(e=>"string"==typeof e?{label:tW(e),value:e}:{value:e.value,label:tW(e.label)})}t4.classes=t0,t4.varsResolver=t3,t4.displayName="@mantine/core/SegmentedControl";var t9=e.i(3969),t6={root:"m_de3d2490",colorOverlay:"m_862f3d1b",shadowOverlay:"m_98ae7f22",alphaOverlay:"m_95709ac0",childrenOverlay:"m_93e74e3"};let t8={withShadow:!0},t7=(0,i.f)((e,{radius:t,size:o})=>({root:{"--cs-radius":void 0===t?void 0:(0,r.V)(t),"--cs-size":(0,Q.t)(o)}})),oe=(0,V.f)(e=>{let o=(0,d.f)("ColorSwatch",t8,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,color:u,radius:h,withShadow:f,children:m,attributes:g,...x}=(0,d.f)("ColorSwatch",t8,o),b=(0,c.f)({name:"ColorSwatch",props:o,classes:t6,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:g,vars:l,varsResolver:t7});return(0,t.jsxs)(p.f,{...b("root",{focusable:!0}),...x,children:[(0,t.jsx)("span",{...b("alphaOverlay")}),f&&(0,t.jsx)("span",{...b("shadowOverlay")}),(0,t.jsx)("span",{...b("colorOverlay",{style:{backgroundColor:u}})}),(0,t.jsx)("span",{...b("childrenOverlay"),children:m})]})});oe.classes=t6,oe.varsResolver=t7,oe.displayName="@mantine/core/ColorSwatch";var ot=e.i(15878),oo=e.i(51351),on=e.i(61549);let or=(0,v.createContext)(null);var oi={wrapper:"m_fee9c77",preview:"m_9dddfbac",body:"m_bffecc3e",sliders:"m_3283bb96",thumb:"m_40d572ba",swatch:"m_d8ee6fd8",swatches:"m_5711e686",saturation:"m_202a296e",saturationOverlay:"m_11b3db02",slider:"m_d856d47d",sliderOverlay:"m_8f327113"};function oa(e,t=0,o=10**t){return Math.round(o*e)/o}let os={grad:.9,turn:360,rad:360/(2*Math.PI)},ol=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;function od(e){let t=ol.exec(e);return t?function({h:e,s:t,l:o,a:n}){let r=(o<50?o:100-o)/100*t;return{h:e,s:r>0?2*r/(o+r)*100:0,v:o+r,a:n}}({h:function(e,t="deg"){return Number(e)*(os[t]||1)}(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}}function oc({r:e,g:t,b:o,a:n}){let r=Math.max(e,t,o),i=r-Math.min(e,t,o),a=i?r===e?(t-o)/i:r===t?2+(o-e)/i:4+(e-t)/i:0;return{h:oa(60*(a<0?a+6:a),3),s:oa(r?i/r*100:0,3),v:oa(r/255*100,3),a:n}}function ou(e){let t="#"===e[0]?e.slice(1):e;return 3===t.length?oc({r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:1}):oc({r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:1})}let op=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i;function oh(e){let t=op.exec(e);return t?oc({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}}let of={hex:/^#?([0-9A-F]{3}){1,2}$/i,hexa:/^#?([0-9A-F]{4}){1,2}$/i,rgb:/^rgb\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,rgba:/^rgba\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,hsl:/hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i,hsla:/^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/i},om={hex:ou,hexa:function(e){let t="#"===e[0]?e.slice(1):e,o=e=>oa(parseInt(e,16)/255,3);if(4===t.length){let e=t.slice(0,3),n=o(t[3]+t[3]);return{...ou(e),a:n}}let n=t.slice(0,6),r=o(t.slice(6,8));return{...ou(n),a:r}},rgb:oh,rgba:oh,hsl:od,hsla:od};function og(e){if("string"!=typeof e)return{h:0,s:0,v:0,a:1};if("transparent"===e)return{h:0,s:0,v:0,a:0};let t=e.trim();for(let[e,o]of Object.entries(of))if(o.test(t))return om[e](t);return{h:0,s:0,v:0,a:1}}function ox({position:e,...o}){return(0,t.jsx)(p.f,{__vars:{"--thumb-y-offset":`${100*e.y}%`,"--thumb-x-offset":`${100*e.x}%`},...o})}ox.displayName="@mantine/core/ColorPickerThumb";var ob=e.i(39485);function ov(e){return{x:(0,ob.f)(e.x,0,1),y:(0,ob.f)(e.y,0,1)}}function oj(e,t,o="ltr"){let n=(0,v.useRef)(!1),r=(0,v.useRef)(!1),i=(0,v.useRef)(0),a=(0,v.useRef)(null),[s,l]=(0,v.useState)(!1);return(0,v.useEffect)(()=>(n.current=!0,()=>{a.current?.()}),[]),{ref:(0,v.useCallback)(s=>{let d=({x:t,y:r})=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>{if(n.current&&s){s.style.userSelect="none";let n=s.getBoundingClientRect();if(n.width&&n.height){let i=(0,ob.f)((t-n.left)/n.width,0,1);e({x:"ltr"===o?i:1-i,y:(0,ob.f)((r-n.top)/n.height,0,1)})}}})},c=()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",g),document.removeEventListener("touchend",p)},u=()=>{!r.current&&n.current&&(r.current=!0,"function"==typeof t?.onScrubStart&&t.onScrubStart(),l(!0),document.addEventListener("mousemove",f),document.addEventListener("mouseup",p),document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",p))},p=()=>{r.current&&n.current&&(r.current=!1,l(!1),c(),setTimeout(()=>{"function"==typeof t?.onScrubEnd&&t.onScrubEnd()},0))},h=e=>{u(),e.preventDefault(),f(e)},f=e=>d({x:e.clientX,y:e.clientY}),m=e=>{e.cancelable&&e.preventDefault(),u(),g(e)},g=e=>{e.cancelable&&e.preventDefault(),d({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY})};return s?.addEventListener("mousedown",h),s?.addEventListener("touchstart",m,{passive:!1}),a.current=()=>{c(),cancelAnimationFrame(i.current)},()=>{s&&(s.removeEventListener("mousedown",h),s.removeEventListener("touchstart",m))}},[o,e]),active:s}}var oy=e.i(66713);let oT=(0,u.$)(e=>{let o=(0,d.f)("ColorSlider",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,onChange:u,onChangeEnd:h,maxValue:f,round:m,size:g="md",focusable:x=!0,value:b,overlays:j,thumbColor:y="transparent",onScrubStart:T,onScrubEnd:w,__staticSelector:k="ColorPicker",attributes:C,ref:O,...R}=o,N=(0,c.f)({name:k,classes:oi,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:C,rootSelector:"slider"}),P=(0,v.use)(or)?.getStyles||N,B=(0,S.i)(),[z,D]=(0,v.useState)({y:0,x:b/f}),I=(0,v.useRef)(z),_=e=>m?Math.round(e*f):e*f,{ref:E}=oj(({x:e,y:t})=>{I.current={x:e,y:t},u?.(_(e))},{onScrubEnd:()=>{let{x:e}=I.current;h?.(_(e)),w?.()},onScrubStart:T});(0,oy.f)(()=>{D({y:0,x:b/f})},[b]);let F=(e,t)=>{e.preventDefault();let o=ov(t);u?.(_(o.x)),h?.(_(o.x))},M=j.map((e,t)=>(0,v.createElement)("div",{...P("sliderOverlay"),style:e,key:t}));return(0,t.jsxs)(p.f,{...R,ref:(0,tX.L)(E,O),...P("slider"),size:g,role:"slider","aria-valuenow":b,"aria-valuemax":f,"aria-valuemin":0,tabIndex:x?0:-1,onKeyDown:e=>{switch(e.key){case"ArrowRight":F(e,{x:z.x+.05,y:z.y});break;case"ArrowLeft":F(e,{x:z.x-.05,y:z.y})}},"data-focus-ring":B.focusRing,__vars:{"--cp-thumb-size":`var(--cp-thumb-size-${g})`},children:[M,(0,t.jsx)(ox,{position:z,...P("thumb",{style:{top:(0,Q.t)(1),background:y}})})]})});oT.displayName="@mantine/core/ColorSlider",oT.classes=oi;let ow={__staticSelector:"AlphaSlider"},oS=(0,u.$)(e=>{let{value:o,onChange:n,onChangeEnd:r,color:i,...a}=(0,d.f)("AlphaSlider",ow,e);return(0,t.jsx)(oT,{...a,value:o,onChange:e=>n?.(oa(e,2)),onChangeEnd:e=>r?.(oa(e,2)),maxValue:1,round:!1,"data-alpha":!0,overlays:[{backgroundImage:"linear-gradient(45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(-45deg, var(--slider-checkers) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--slider-checkers) 75%), linear-gradient(-45deg, var(--mantine-color-body) 75%, var(--slider-checkers) 75%)",backgroundSize:`${(0,Q.t)(8)} ${(0,Q.t)(8)}`,backgroundPosition:`0 0, 0 ${(0,Q.t)(4)}, ${(0,Q.t)(4)} ${(0,Q.t)(-4)}, ${(0,Q.t)(-4)} 0`},{backgroundImage:`linear-gradient(90deg, transparent, ${i})`},{boxShadow:`rgba(0, 0, 0, .1) 0 0 0 ${(0,Q.t)(1)} inset, rgb(0, 0, 0, .15) 0 0 ${(0,Q.t)(4)} inset`}]})});function ok({h:e,s:t,v:o,a:n}){let r=e/360*6,i=t/100,a=o/100,s=Math.floor(r),l=a*(1-i),d=a*(1-(r-s)*i),c=a*(1-(1-r+s)*i),u=s%6;return{r:oa(255*[a,d,l,l,c,a][u]),g:oa(255*[c,a,a,d,l,l][u]),b:oa(255*[l,l,c,a,a,d][u]),a:oa(n,2)}}function oC(e,t){let{r:o,g:n,b:r,a:i}=ok(e);return t?`rgba(${o}, ${n}, ${r}, ${oa(i,2)})`:`rgb(${o}, ${n}, ${r})`}function oO({h:e,s:t,v:o,a:n},r){let i=(200-t)*o/100,a={h:Math.round(e),s:Math.round(i>0&&i<200?t*o/100/(i<=100?i:200-i)*100:0),l:Math.round(i/2)};return r?`hsla(${a.h}, ${a.s}%, ${a.l}%, ${oa(n,2)})`:`hsl(${a.h}, ${a.s}%, ${a.l}%)`}function oR(e){let t=e.toString(16);return t.length<2?`0${t}`:t}function oN(e){let{r:t,g:o,b:n}=ok(e);return`#${oR(t)}${oR(o)}${oR(n)}`}oS.displayName="@mantine/core/AlphaSlider",oS.classes=oT.classes;let oP={hex:oN,hexa:e=>{let t;return t=Math.round(255*e.a),`${oN(e)}${oR(t)}`},rgb:e=>oC(e,!1),rgba:e=>oC(e,!0),hsl:e=>oO(e,!1),hsla:e=>oO(e,!0)};function oB(e,t){return t?e in oP?oP[e](t):oP.hex(t):"#000000"}let oz={__staticSelector:"HueSlider"},oD=(0,u.$)(e=>{let{value:o,onChange:n,onChangeEnd:r,color:i,...a}=(0,d.f)("HueSlider",oz,e);return(0,t.jsx)(oT,{...a,value:o,onChange:n,onChangeEnd:r,maxValue:360,thumbColor:`hsl(${o}, 100%, 50%)`,round:!0,"data-hue":!0,overlays:[{backgroundImage:"linear-gradient(to right,hsl(0,100%,50%),hsl(60,100%,50%),hsl(120,100%,50%),hsl(170,100%,50%),hsl(240,100%,50%),hsl(300,100%,50%),hsl(360,100%,50%))"},{boxShadow:`rgba(0, 0, 0, .1) 0 0 0 ${(0,Q.t)(1)} inset, rgb(0, 0, 0, .15) 0 0 ${(0,Q.t)(4)} inset`}]})});function oI({className:e,onChange:o,onChangeEnd:n,value:r,saturationLabel:i,focusable:a=!0,size:s,color:l,onScrubStart:d,onScrubEnd:c,...u}){let{getStyles:h}=(0,v.use)(or),[f,m]=(0,v.useState)({x:r.s/100,y:1-r.v/100}),g=(0,v.useRef)(f),{ref:x}=oj(({x:e,y:t})=>{g.current={x:e,y:t},o({s:Math.round(100*e),v:Math.round((1-t)*100)})},{onScrubEnd:()=>{let{x:e,y:t}=g.current;n({s:Math.round(100*e),v:Math.round((1-t)*100)}),c?.()},onScrubStart:d});(0,v.useEffect)(()=>{m({x:r.s/100,y:1-r.v/100})},[r.s,r.v]);let b=(e,t)=>{e.preventDefault();let r=ov(t);o({s:Math.round(100*r.x),v:Math.round((1-r.y)*100)}),n({s:Math.round(100*r.x),v:Math.round((1-r.y)*100)})};return(0,t.jsxs)(p.f,{...h("saturation"),ref:x,...u,role:"slider","aria-label":i,"aria-valuenow":f.x,"aria-valuetext":oB("rgba",r),tabIndex:a?0:-1,onKeyDown:e=>{switch(e.key){case"ArrowUp":b(e,{y:f.y-.05,x:f.x});break;case"ArrowDown":b(e,{y:f.y+.05,x:f.x});break;case"ArrowRight":b(e,{x:f.x+.05,y:f.y});break;case"ArrowLeft":b(e,{x:f.x-.05,y:f.y})}},children:[(0,t.jsx)("div",{...h("saturationOverlay",{style:{backgroundColor:`hsl(${r.h}, 100%, 50%)`}})}),(0,t.jsx)("div",{...h("saturationOverlay",{style:{backgroundImage:"linear-gradient(90deg, #fff, transparent)"}})}),(0,t.jsx)("div",{...h("saturationOverlay",{style:{backgroundImage:"linear-gradient(0deg, #000, transparent)"}})}),(0,t.jsx)(ox,{position:f,...h("thumb",{style:{backgroundColor:l}})})]})}oD.displayName="@mantine/core/HueSlider",oD.classes=oT.classes,oI.displayName="@mantine/core/Saturation";var o_=e.i(75847);function oE({className:e,datatype:o,setValue:n,onChangeEnd:r,size:i,focusable:a,data:s,swatchesPerRow:l,value:d,...c}){let u=(0,v.use)(or),h=s.map((e,o)=>(0,v.createElement)(oe,{...u.getStyles("swatch"),unstyled:u.unstyled,component:"button",type:"button",color:e,key:o,radius:"sm",onClick:()=>{n(e),r?.(e)},"aria-label":e,tabIndex:a?0:-1,"data-swatch":!0},d===e&&(0,t.jsx)(ot._,{size:"35%",color:.5>(0,o_.E)(e)?"white":"black"})));return(0,t.jsx)(p.f,{...u.getStyles("swatches"),...c,children:h})}oE.displayName="@mantine/core/Swatches";let oF={swatchesPerRow:7,withPicker:!0,focusable:!0,size:"md",__staticSelector:"ColorPicker"},oM=(0,i.f)((e,{size:t,swatchesPerRow:o})=>({wrapper:{"--cp-preview-size":(0,r.K)(t,"cp-preview-size"),"--cp-width":(0,r.K)(t,"cp-width"),"--cp-body-spacing":(0,r.m)(t),"--cp-swatch-size":`${100/o}%`,"--cp-thumb-size":(0,r.K)(t,"cp-thumb-size"),"--cp-saturation-height":(0,r.K)(t,"cp-saturation-height")}})),o$=(0,u.$)(e=>{let o=(0,d.f)("ColorPicker",oF,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,format:u="hex",value:h,defaultValue:f,onChange:m,onChangeEnd:g,withPicker:x,size:b,saturationLabel:j,hueLabel:y,alphaLabel:T,focusable:w,swatches:S,swatchesPerRow:k,fullWidth:C,onColorSwatchClick:O,__staticSelector:R,mod:N,attributes:B,name:z,hiddenInputProps:D,...I}=o,_=(0,c.f)({name:R,props:o,classes:oi,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:B,rootSelector:"wrapper",vars:l,varsResolver:oM}),E=(0,v.useRef)(u||"hex"),F=(0,v.useRef)(""),M=(0,v.useRef)(-1),$=(0,v.useRef)(!1),A="hexa"===u||"rgba"===u||"hsla"===u,[V,L,W]=(0,P.f)({value:h,defaultValue:f,finalValue:"#FFFFFF",onChange:m}),[q,G]=(0,v.useState)(og(V)),H=()=>{window.clearTimeout(M.current),$.current=!0},K=()=>{window.clearTimeout(M.current),M.current=window.setTimeout(()=>{$.current=!1},200)},U=e=>{G(t=>{let o={...t,...e};return F.current=oB(E.current,o),o}),L(F.current)};return(0,oy.f)(()=>{"string"==typeof h&&function(e){for(let[,t]of Object.entries(of))if(t.test(e))return!0;return!1}(h)&&!$.current&&G(og(h))},[h]),(0,oy.f)(()=>{E.current=u||"hex",L(oB(E.current,q))},[u]),(0,t.jsx)(or,{value:{getStyles:_,unstyled:s},children:(0,t.jsxs)(p.f,{..._("wrapper"),size:b,mod:[{"full-width":C},N],...I,children:[z&&(0,t.jsx)("input",{type:"hidden",name:z,value:V,...D}),x&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(oI,{value:q,onChange:U,onChangeEnd:({s:e,v:t})=>g?.(oB(E.current,{...q,s:e,v:t})),color:V,size:b,focusable:w,saturationLabel:j,onScrubStart:H,onScrubEnd:K}),(0,t.jsxs)("div",{..._("body"),children:[(0,t.jsxs)("div",{..._("sliders"),children:[(0,t.jsx)(oD,{value:q.h,onChange:e=>U({h:e}),onChangeEnd:e=>g?.(oB(E.current,{...q,h:e})),size:b,focusable:w,"aria-label":y,onScrubStart:H,onScrubEnd:K}),A&&(0,t.jsx)(oS,{value:q.a,onChange:e=>U({a:e}),onChangeEnd:e=>{g?.(oB(E.current,{...q,a:e}))},size:b,color:oB("hex",q),focusable:w,"aria-label":T,onScrubStart:H,onScrubEnd:K})]}),A&&(0,t.jsx)(oe,{color:V,radius:"sm",size:"var(--cp-preview-size)",..._("preview")})]})]}),Array.isArray(S)&&(0,t.jsx)(oE,{data:S,swatchesPerRow:k,focusable:w,setValue:L,value:V,onChangeEnd:e=>{let t=oB(u,og(e));O?.(t),g?.(t),W||G(og(e))}})]})})});function oA(){return(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 200 200",style:{width:(0,Q.t)(18),height:(0,Q.t)(18)},children:[(0,t.jsx)("path",{fill:"#FF5178",d:"M100 0a100 100 0 00-50 13.398l30 51.961A40 40 0 01100 60V0z"}),(0,t.jsx)("path",{fill:"#FF9259",d:"M49.982 13.408a99.999 99.999 0 00-36.595 36.61l51.968 29.99a40 40 0 0114.638-14.645l-30.01-51.955z"}),(0,t.jsx)("path",{fill:"#FFD23B",d:"M13.386 50.02A100 100 0 000 100.025l60-.014a40 40 0 015.354-20.002L13.386 50.021z"}),(0,t.jsx)("path",{fill:"#89C247",d:"M0 100a99.999 99.999 0 0013.398 50l51.961-30A40.001 40.001 0 0160 100H0z"}),(0,t.jsx)("path",{fill:"#49B296",d:"M13.39 149.989a100.001 100.001 0 0036.599 36.607l30.006-51.958a39.99 39.99 0 01-14.639-14.643l-51.965 29.994z"}),(0,t.jsx)("path",{fill:"#2897B1",d:"M49.989 186.596A99.995 99.995 0 0099.987 200l.008-60a39.996 39.996 0 01-20-5.362l-30.007 51.958z"}),(0,t.jsx)("path",{fill:"#3EC3FF",d:"M100 200c17.554 0 34.798-4.621 50-13.397l-30-51.962A40 40 0 01100 140v60z"}),(0,t.jsx)("path",{fill:"#09A1E5",d:"M150.003 186.601a100.001 100.001 0 0036.601-36.604l-51.962-29.998a40 40 0 01-14.641 14.641l30.002 51.961z"}),(0,t.jsx)("path",{fill:"#077CCC",d:"M186.607 149.992A99.993 99.993 0 00200 99.99l-60 .006a39.998 39.998 0 01-5.357 20.001l51.964 29.995z"}),(0,t.jsx)("path",{fill:"#622876",d:"M200 100c0-17.554-4.621-34.798-13.397-50l-51.962 30A39.997 39.997 0 01140 100h60z"}),(0,t.jsx)("path",{fill:"#962B7C",d:"M186.597 49.99a99.994 99.994 0 00-36.606-36.598l-29.995 51.965a40 40 0 0114.643 14.64l51.958-30.006z"}),(0,t.jsx)("path",{fill:"#CB2E81",d:"M149.976 13.384A99.999 99.999 0 0099.973 0l.016 60a40.001 40.001 0 0120.002 5.353l29.985-51.97z"})]})}o$.classes=oi,o$.varsResolver=oM,o$.displayName="@mantine/core/ColorPicker";function oV(e){return e?e.map(e=>(function e(t){return"string"==typeof t?{value:t,label:t}:"object"==typeof t&&"value"in t&&!("label"in t)?{value:t.value,label:`${t.value}`,disabled:t.disabled}:"object"==typeof t&&"group"in t?{group:t.group,items:t.items.map(t=>e(t))}:"number"==typeof t||"bigint"==typeof t||"boolean"==typeof t?{value:t,label:`${t}`}:t})(e)):[]}var oL={dropdown:"m_88b62a41",search:"m_985517d8",options:"m_b2821a6e",option:"m_92253aa5",empty:"m_2530cd1d",header:"m_858f94bd",footer:"m_82b967cb",group:"m_254f3e4f",groupLabel:"m_2bb2e9e5",chevron:"m_2943220b",optionsDropdownOption:"m_390b5f4",optionsDropdownCheckIcon:"m_8ee53fc2",optionsDropdownCheckPlaceholder:"m_a530ee0a"};let oW={error:null},oq=(0,i.f)((e,{size:t,color:o})=>({chevron:{"--combobox-chevron-size":(0,r.K)(t,"combobox-chevron-size"),"--combobox-chevron-color":o?(0,a.f)(o,e):void 0}})),oG=(0,u.$)(e=>{let o=(0,d.f)("ComboboxChevron",oW,e),{size:n,error:r,style:i,className:a,classNames:s,styles:l,unstyled:u,vars:h,attributes:f,mod:m,...g}=o,x=(0,c.f)({name:"ComboboxChevron",classes:oL,props:o,style:i,className:a,classNames:s,styles:l,unstyled:u,vars:h,varsResolver:oq,attributes:f,rootSelector:"chevron"});return(0,t.jsx)(p.f,{component:"svg",...g,...x("chevron"),size:n,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",mod:["combobox-chevron",{error:r},m],children:(0,t.jsx)("path",{d:"M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})});function oH({data:e}){if("group"in e){let o=e.items.map(e=>(0,t.jsx)(oH,{data:e},e.value));return(0,t.jsx)("optgroup",{label:e.group,children:o})}let{value:o,label:n,...r}=e;return(0,t.jsx)("option",{value:e.value,...r,children:e.label})}oG.classes=oL,oG.varsResolver=oq,oG.displayName="@mantine/core/ComboboxChevron",oH.displayName="@mantine/core/NativeSelectOption";let oK={size:"sm",rightSectionPointerEvents:"none"},oU=(0,u.$)(e=>{let{data:o,children:n,size:r,error:i,rightSection:a,unstyled:s,...l}=(0,d.f)(["Input","InputWrapper","NativeSelect"],oK,e),c=oV(o).map((e,o)=>(0,t.jsx)(oH,{data:e},o));return(0,t.jsx)(e1,{component:"select",...l,__staticSelector:"NativeSelect",size:r,pointer:!0,error:i,unstyled:s,rightSection:a||(0,t.jsx)(oG,{size:r,error:i,unstyled:s}),children:n||c})});function oY(e,t){return 0===t.length?e:t.reduce((t,o)=>Math.abs(o-e)<Math.abs(t-e)?o:t)}oU.classes=e1.classes,oU.displayName="@mantine/core/NativeSelect";let[oX,oZ]=(0,h.f)("SliderProvider was not found in tree");function oJ({size:e,disabled:o,variant:n,color:r,thumbSize:i,radius:a,orientation:s,...l}){let{getStyles:d}=oZ();return(0,t.jsx)(p.f,{tabIndex:-1,variant:n,size:e,...d("root"),mod:{orientation:s},...l})}oJ.displayName="@mantine/core/SliderRoot";var oQ=e.i(89463);function o0({max:e,min:o,value:n,position:r,label:i,dragging:a,onMouseDown:s,onKeyDownCapture:l,labelTransitionProps:d,labelAlwaysOn:c,thumbLabel:u,thumbValueText:h,onFocus:f,onBlur:m,showLabelOnHover:g,isHovered:x,children:b=null,disabled:j,orientation:y="horizontal",className:T,style:w,ref:S,...k}){let{getStyles:C}=oZ(),[O,R]=(0,v.useState)(!1),N=c||a||O||g&&x,P="function"==typeof h?h(n):h;return(0,t.jsxs)(p.f,{...k,tabIndex:j?-1:0,role:"slider","aria-label":u,"aria-valuemax":e,"aria-valuemin":o,"aria-valuenow":n,"aria-valuetext":P,"aria-disabled":j,"aria-orientation":y,ref:S,__vars:{"--slider-thumb-offset":`${r}%`},...C("thumb",{focusable:!0,className:T,style:w}),mod:{dragging:a,disabled:j},onFocus:e=>{R(!0),"function"==typeof f&&f(e)},onBlur:e=>{R(!1),"function"==typeof m&&m(e)},onTouchStart:s,onMouseDown:s,onKeyDownCapture:l,onClick:e=>e.stopPropagation(),children:[b,(0,t.jsx)(oQ.f,{mounted:null!=i&&!!N,transition:"fade",duration:0,...d,children:e=>(0,t.jsx)("div",{...C("label",{style:e}),children:i})})]})}function o1({value:e,min:t,max:o}){return Math.min(Math.max((e-t)/(o-t)*100,0),100)}function o2({marks:e,min:o,max:n,disabled:r,value:i,offset:a,inverted:s,startPointValue:l}){let{getStyles:d}=oZ();if(!e)return null;let c=e.map((e,c)=>e.hidden?null:(0,v.createElement)(p.f,{...d("markWrapper"),__vars:{"--mark-offset":`${o1({value:e.value,min:o,max:n})}%`},key:c},(0,t.jsx)(p.f,{...d("mark"),mod:{filled:function({mark:e,offset:t,value:o,inverted:n=!1,startPointValue:r}){return"number"!=typeof r||n?n?"number"==typeof t&&e.value<=t||e.value>=o:"number"==typeof t?e.value>=t&&e.value<=o:e.value<=o:e.value>=r&&e.value<=o||e.value<=r&&e.value>=o}({mark:e,value:i,offset:a,inverted:s,startPointValue:l}),disabled:r}}),e.label&&(0,t.jsx)("div",{...d("markLabel"),children:e.label})));return(0,t.jsx)("div",{children:c})}function o3({filled:e,children:o,offset:n,disabled:r,marksOffset:i,inverted:a,startPointValue:s,containerProps:l,...d}){let{getStyles:c}=oZ();return(0,t.jsx)(p.f,{...c("trackContainer"),mod:{disabled:r},...l,children:(0,t.jsxs)(p.f,{...c("track"),mod:{inverted:a,disabled:r},children:[(0,t.jsx)(p.f,{mod:{inverted:a,disabled:r},__vars:{"--slider-bar-width":`calc(${e}% + 2 * var(--slider-size))`,"--slider-bar-offset":`calc(${n}% - var(--slider-size))`},...c("bar")}),o,(0,t.jsx)(o2,{...d,offset:i,disabled:r,inverted:a,startPointValue:s})]})})}function o4(e,t){return parseFloat(e.toFixed(t))}function o5(e,t){let o=[...t].sort((e,t)=>e.value-t.value).find(t=>t.value>e);return o?o.value:e}function o9(e,t){let o=[...t].sort((e,t)=>t.value-e.value).find(t=>t.value<e);return o?o.value:e}function o6(e){let t=[...e].sort((e,t)=>e.value-t.value);return t.length>0?t[0].value:0}function o8(e){let t=[...e].sort((e,t)=>e.value-t.value);return t.length>0?t[t.length-1].value:100}o0.displayName="@mantine/core/SliderThumb",o2.displayName="@mantine/core/SliderMarks",o3.displayName="@mantine/core/SliderTrack";var o7={root:"m_dd36362e",label:"m_c9357328",thumb:"m_c9a9a60a",trackContainer:"m_a8645c2",track:"m_c9ade57f",bar:"m_38aeed47",markWrapper:"m_b7b0423a",mark:"m_dd33bc19",markLabel:"m_68c77a5b"};let ne={radius:"xl",min:0,max:100,step:1,marks:[],label:e=>e,labelTransitionProps:{transition:"fade",duration:0},thumbLabel:"",showLabelOnHover:!0,scale:e=>e,size:"md"},nt=(0,i.f)((e,{size:t,color:o,thumbSize:n,radius:i})=>({root:{"--slider-size":(0,r.K)(t,"slider-size"),"--slider-color":o?(0,a.f)(o,e):void 0,"--slider-radius":void 0===i?void 0:(0,r.V)(i),"--slider-thumb-size":void 0!==n?(0,Q.t)(n):"calc(var(--slider-size) * 2)"}})),no=(0,u.$)(e=>{let o=(0,d.f)("Slider",ne,e),{classNames:n,styles:r,value:i,onChange:a,onChangeEnd:s,size:l,min:u,max:p,domain:h,step:f,precision:m,defaultValue:g,name:x,marks:b,label:j,labelTransitionProps:y,labelAlwaysOn:T,thumbLabel:w,thumbValueText:S,showLabelOnHover:C,thumbChildren:O,disabled:R,unstyled:N,scale:B,inverted:z,startPointValue:D,orientation:I,className:_,style:E,vars:F,hiddenInputProps:M,restrictToMarks:$,thumbProps:A,attributes:V,ref:L,...W}=o,q=(0,c.f)({name:"Slider",props:o,classes:o7,classNames:n,className:_,styles:r,style:E,attributes:V,vars:F,varsResolver:nt,unstyled:N}),{dir:G}=(0,k.f)(),[H,K]=(0,v.useState)(!1),[U,Y]=(0,P.f)({value:"number"==typeof i?(0,ob.f)(i,u,p):i,defaultValue:"number"==typeof g?(0,ob.f)(g,u,p):g,finalValue:(0,ob.f)(0,u,p),onChange:a}),X=(0,v.useRef)(U),Z=(0,v.useRef)(s);(0,v.useEffect)(()=>{Z.current=s},[s]);let J=(0,v.useRef)(null),Q=(0,v.useRef)(null),[ee,et]=h||[u,p],eo=o1({value:U,min:ee,max:et}),en=B(U),er="function"==typeof j?j(en):j,ei=m??function(e){if(!e)return 0;let t=e.toString().split(".");return t.length>1?t[1].length:0}(f),ea="number"==typeof D&&!z,es=ea?o1({value:D,min:ee,max:et}):0,el=ea?Math.min(eo,es):0,ed=ea?Math.abs(eo-es):eo,ec=(0,v.useCallback)(({x:e})=>{if(!R){let t=function({value:e,containerWidth:t,min:o,max:n,step:r,precision:i}){let a=(t?Math.min(Math.max(e,0),t)/t:e)*(n-o),s=Math.max((0!==a?Math.round(a/r)*r:0)+o,o);return void 0!==i?Number(s.toFixed(i)):s}({value:e,min:ee,max:et,step:f,precision:ei}),o=(0,ob.f)(t,u,p);Y($&&b?.length?oY(o,b.map(e=>e.value)):o),X.current=o}},[R,u,p,ee,et,f,ei,Y,b,$]),{ref:eu,active:ep}=oj(({x:e,y:t})=>ec({x:"vertical"===I?1-t:e}),{onScrubEnd:(0,v.useCallback)(()=>{if(!R&&Z.current){let e=$&&b?.length?oY(X.current,b.map(e=>e.value)):X.current;Z.current(e)}},[R,b,$])},G),eh=(0,v.useCallback)(e=>{!R&&Z.current&&Z.current(e)},[R]);return(0,t.jsx)(oX,{value:{getStyles:q},children:(0,t.jsxs)(oJ,{...W,ref:(0,tX.L)(L,J),onKeyDownCapture:e=>{if(!R)switch(e.key){case"ArrowUp":{if(e.preventDefault(),Q.current?.focus(),$&&b){let e=o5(U,b);Y(e),eh(e);break}let t=o4(Math.min(Math.max(U+f,ee),et),ei);Y(t),eh(t);break}case"ArrowRight":{if(e.preventDefault(),Q.current?.focus(),$&&b){let e="rtl"===G?o9(U,b):o5(U,b);Y(e),eh(e);break}let t=o4(Math.min(Math.max("rtl"===G?U-f:U+f,ee),et),ei);Y(t),eh(t);break}case"ArrowDown":{if(e.preventDefault(),Q.current?.focus(),$&&b){let e=o9(U,b);Y(e),eh(e);break}let t=o4(Math.min(Math.max(U-f,ee),et),ei);Y(t),eh(t);break}case"ArrowLeft":{if(e.preventDefault(),Q.current?.focus(),$&&b){let e="rtl"===G?o5(U,b):o9(U,b);Y(e),eh(e);break}let t=o4(Math.min(Math.max("rtl"===G?U+f:U-f,ee),et),ei);Y(t),eh(t);break}case"Home":if(e.preventDefault(),Q.current?.focus(),$&&b){Y(o6(b)),eh(o6(b));break}Y(u),eh(u);break;case"End":if(e.preventDefault(),Q.current?.focus(),$&&b){Y(o8(b)),eh(o8(b));break}Y(p),eh(p)}},onMouseDownCapture:()=>J.current?.focus(),size:l,disabled:R,orientation:I,children:[(0,t.jsx)(o3,{inverted:z,offset:el,filled:ed,marks:b,min:ee,max:et,value:en,startPointValue:ea?D:void 0,disabled:R,containerProps:{ref:eu,onMouseEnter:C?()=>K(!0):void 0,onMouseLeave:C?()=>K(!1):void 0},children:(0,t.jsx)(o0,{max:et,min:ee,value:en,position:eo,dragging:ep,label:er,ref:Q,labelTransitionProps:y,labelAlwaysOn:T,thumbLabel:w,thumbValueText:S,showLabelOnHover:C,isHovered:H,disabled:R,orientation:I,...A,children:O})}),(0,t.jsx)("input",{type:"hidden",name:x,value:en,...M})]})})});no.classes=o7,no.varsResolver=nt,no.displayName="@mantine/core/Slider";let nn=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}];function nr(e,t){let o=e.reduce((e,t)=>(e[t.prop]=t.libraryValue,e),{});return Object.keys(t).reduce((e,n)=>(t[n]!==o[n]&&(e[n]=t[n]),e),{})}function ni({code:e,controls:t,state:o}){return"function"==typeof e?e(nr(t,o)):function(e,t){let o,n=[],r=(o=t.split("\n").find(e=>e.includes("{{props}}")))&&o.trim().startsWith("{{props}}"),i=t.replace("{{children}}",e.children||"");for(let[t,o]of Object.entries(e))"children"!==t&&("string"==typeof o?n.push(`${t}="${o}"`):"number"==typeof o?n.push(`${t}={${o}}`):"boolean"==typeof o&&(o?n.push(t):n.push(`${t}={false}`)));if(!r){let e=n.join(" ");return e.length>0?i.replace(/{{props}}/g,` ${e}`):i.replace(/{{props}}/g,"")}return i.replace(/^(\s*){{props}}(\s*)$/gm,(e,t,o)=>{let r=n.map((e,o)=>`${t}${e}${o!==n.length-1?"\n":""}`).join("");return`${r}${o}`}).trim().replace("\n\n","\n")}(nr(t,o),e)}let na={boolean:function({value:e,onChange:o,prop:n,...r}){return(0,t.jsx)(tL,{checked:e,onChange:e=>o(e.currentTarget.checked),label:tq(n),...r})},segmented:function({data:e,value:o,onChange:n,prop:r,transformLabel:i=!0,...a}){return(0,t.jsx)(eQ.Wrapper,{labelElement:"div",label:tq(r),...a,children:(0,t.jsx)(t4,{data:i?t5(e):e,value:o,onChange:n,fullWidth:!0,transitionDuration:150})})},color:function({value:e,onChange:o,prop:n,...r}){let[i,a]=(0,v.useState)("#fff"),s=e=>{a(e),o(e)},l=Object.keys(t9.f.colors).filter(e=>"dark"!==e).map(n=>(0,t.jsx)(oe,{color:`var(--mantine-color-${n}-filled)`,component:"button",onClick:()=>o(n),radius:"sm",className:"m_5e1a038c","aria-label":n,children:e===n&&(0,t.jsx)(ot._,{className:"m_f9decbb8"})},n));return(0,t.jsx)(eQ.Wrapper,{labelElement:"div",label:tq(n),...r,children:(0,t.jsxs)(oo.f,{gap:2,mt:2,wrap:"wrap",children:[l,(0,t.jsxs)(on.f,{radius:"md",position:"bottom-end",shadow:"md",children:[(0,t.jsx)(on.f.Target,{children:(0,t.jsx)(C.f,{className:"m_2f5f7bca","aria-label":"Pick color",children:(0,t.jsx)(oA,{})})}),(0,t.jsxs)(on.f.Dropdown,{p:8,children:[(0,t.jsx)(o$,{value:i,onChange:s,format:"rgba"}),(0,t.jsx)(e2,{value:i,onChange:e=>s(e.currentTarget.value),placeholder:"Enter color",radius:"md",size:"xs",mt:"xs"})]})]})]})})},string:function({value:e,onChange:o,prop:n,...r}){return(0,t.jsx)(e2,{value:e,onChange:e=>o(e.currentTarget.value),label:tq(n),placeholder:"Enter prop value",...r})},select:function({value:e,onChange:o,prop:n,data:r,...i}){return(0,t.jsx)(oU,{value:e,onChange:e=>o(e.currentTarget.value),label:tq(n),data:t5(r),...i})},size:function({value:e,onChange:o,prop:n,...r}){let i=nn.find(t=>t.label===e).value;return(0,t.jsx)(eQ.Wrapper,{labelElement:"div",label:tq(n),...r,children:(0,t.jsx)(no,{value:i,onChange:e=>o(nn.find(t=>t.value===e).label),label:e=>nn.find(t=>t.value===e).label,step:25,marks:nn,styles:{markLabel:{display:"none"}},thumbLabel:"Size"})})},number:function({value:e,onChange:o,prop:n,step:r,min:i,max:a,...s}){return(0,t.jsx)(eQ.Wrapper,{labelElement:"div",label:tq(n),...s,children:(0,t.jsx)(no,{value:e,onChange:o,step:r,min:i,max:a,thumbLabel:"Size"})})}};function ns({code:e,controls:o,children:n,centered:r,maxWidth:i,minHeight:a,withPadding:s,dimmed:l,striped:d,overflow:c}){let u=o.reduce((e,t)=>(e[t.prop]=t.initialValue,e),{}),[p,h]=(0,v.useState)(u),f=o.map(e=>{let o=na[e.type],{initialValue:n,libraryValue:r,...i}=e;return(0,t.jsx)(o,{value:p[e.prop],onChange:t=>{let o;return o=e.prop,h(e=>({...e,[o]:t}))},...i},e.prop)});return(0,t.jsxs)(tN,{children:[(0,t.jsx)(tz,{controls:f,centered:r,withPadding:s,maxWidth:i,minHeight:a,dimmed:l,striped:d,overflow:c,withGrid:!0,children:(0,v.cloneElement)(n,p)}),(0,t.jsx)(tR,{code:function({code:e,controls:t,state:o}){if("string"==typeof e||"function"==typeof e)return[{fileName:"Demo.tsx",language:"tsx",code:ni({code:e,controls:t,state:o})}];if(Array.isArray(e))return e.map(e=>({fileName:e.fileName||"Demo.tsx",language:e.language||"tsx",code:ni({code:e.code,controls:t,state:o})}));throw Error("Unexpected code format in configurator")}({code:e,controls:o,state:p})})]})}function nl(e){return e?`.${e} {
  outline: 2px solid #fe0d45;
  outline-offset: -2px; 
}
`:"/*\n * Hover over selectors to apply outline styles\n *\n */"}function nd({data:e,code:o,withPadding:n,maxWidth:r,centered:i,children:a,dimmed:s,striped:l}){let[d,c]=(0,v.useState)(null),u=Object.keys(e.selectors),p=u.map(o=>(0,t.jsxs)(C.f,{className:"m_22105db1",onMouseEnter:()=>c(o),onMouseLeave:()=>c(null),children:[(0,t.jsx)(L.f,{mb:2,children:o}),(0,t.jsx)(L.f,{fz:11,c:"dimmed",children:e.selectors[o]})]},o)),h=d?` classNames={{ ${d}: classes.${d} }}`:"";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:nl(d)}}),(0,t.jsxs)(tN,{children:[(0,t.jsx)(tz,{withPadding:n,maxWidth:r,centered:i,controls:p,dimmed:s,striped:l,title:"Component Styles API",description:"Hover over selectors to highlight corresponding elements",children:(0,v.cloneElement)(a,{classNames:u.reduce((e,t)=>(e[t]=t,e),{})})}),(0,t.jsx)(tR,{code:[{fileName:"Demo.module.css",language:"scss",code:nl(d)},{fileName:"Demo.tsx",language:"tsx",code:o.replace("{{props}}",h)}]})]})]})}function nc({data:e,demoProps:o}){switch(e.type){case"code":return(0,t.jsx)(tP,{...e,...o,children:(0,t.jsx)(e.component,{})});case"configurator":return(0,t.jsx)(ns,{...e,...o,children:(0,t.jsx)(e.component,{})});case"styles-api":return(0,t.jsx)(nd,{...e,...o,children:(0,t.jsx)(e.component,{})});default:return null}}var nu=e.i(1573),np={root:"m_ddec01c0",icon:"m_dde7bd57",cite:"m_dde51a35"};let nh={iconSize:48},nf=(0,i.f)((e,{color:t,iconSize:o,radius:n,textWrap:i})=>{let s=(0,W.f)({color:t||e.primaryColor,theme:e,colorScheme:"dark"}),l=(0,W.f)({color:t||e.primaryColor,theme:e,colorScheme:"light"});return{root:{"--bq-bg-light":(0,nu.p)(l.value,.07),"--bq-bg-dark":(0,nu.p)(s.value,.06),"--bq-bd":(0,a.f)(t,e),"--bq-icon-size":(0,Q.t)(o),"--bq-radius":(0,r.V)(n),"--bq-text-wrap":i}}}),nm=(0,u.$)(e=>{let o=(0,d.f)("Blockquote",nh,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,children:u,icon:h,iconSize:f,cite:m,textWrap:g,attributes:x,...b}=o,v=(0,c.f)({name:"Blockquote",classes:np,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:x,vars:l,varsResolver:nf});return(0,t.jsxs)(p.f,{component:"blockquote",...v("root"),...b,children:[h&&(0,t.jsx)("span",{...v("icon"),children:h}),u,m&&(0,t.jsx)("cite",{...v("cite"),children:m})]})});nm.classes=np,nm.varsResolver=nf,nm.displayName="@mantine/core/Blockquote";let ng=(0,_.f)("outline","info-circle","InfoCircle",[["path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0",key:"svg-0"}],["path",{d:"M12 9h.01",key:"svg-1"}],["path",{d:"M11 12h1v4h1",key:"svg-2"}]]);var nx=e.i(25181);function nb({className:e,...o}){let n=(0,S.i)();return(0,t.jsx)(nm,{className:(0,ey.f)(nx.default.root,e),icon:(0,t.jsx)(ng,{className:nx.default.icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,nu.p)(n.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,nu.p)(n.colors.blue[4],.2)},...o})}var nv=e.i(10674);function nj({id:e,children:o,order:n=2,...r}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:e,"data-heading":o,"data-order":n,className:nv.default.titleOffset}),(0,t.jsx)(e3.f,{order:n,className:nv.default.title,...r,children:(0,t.jsx)("a",{className:(0,ey.f)(nv.default.titleLink,"mantine-focus-auto"),href:`#${e}`,children:o})})]})}let ny=e=>o=>(0,t.jsx)(nj,{order:e,...o});function nT({children:e}){let o;return(0,t.jsx)(tj,{className:nv.default.code,code:e.props.children,language:(o=(e.props.className||"").match(/language-(?<lang>.*)/))&&o.groups&&o.groups.lang?o.groups.lang:"tsx"})}function nw(e){return(0,t.jsx)("p",{className:nv.default.paragraph,...e})}function nS(e){return(0,t.jsx)("ul",{className:nv.default.ul,...e})}function nk(e){return(0,t.jsx)("li",{className:nv.default.li,...e})}function nC({href:e,...o}){return(0,t.jsx)(ev.f,{className:nv.default.link,href:e,...o})}function nO(e){return{img:ty.f,ul:nS,li:nk,p:nw,a:nC,code:ti,blockquote:nb,h1:ny(1),h2:ny(2),h3:ny(3),h4:ny(4),h5:ny(5),h6:ny(6),pre:nT,Demo:nc,...e}}function nR({components:e,data:o,componentPrefix:n}){let r=e.map(e=>(0,t.jsx)("div",{className:tt.default.group,children:(0,t.jsx)(to,{component:e,componentPrefix:n,data:o[e]})},e));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:tt.default.groupsHeader,children:[(0,t.jsx)(nj,{style:{marginTop:0},children:"Styles API"}),(0,t.jsxs)(nw,{style:{marginTop:0},children:[(0,t.jsx)(ti,{children:e[0]})," component supports"," ",(0,t.jsx)(nC,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"Styles API"}),". With Styles API, you can customize styles of any inner element. Follow"," ",(0,t.jsx)(nC,{href:"https://mantine.dev/styles/styles-api",target:"_blank",children:"the documentation"})," ","to learn how to use CSS modules, CSS variables and inline styles to get full control over component styles."]})]}),r]})}let nN=(0,u.$)(e=>{let{w:o,h:n,miw:r,mih:i,...a}=(0,d.f)("Space",null,e);return(0,t.jsx)(p.f,{...a,w:o,miw:r??o,h:n,mih:i??n})});nN.displayName="@mantine/core/Space";var nP=e.i(56425);function nB(e,t=0){return 0===e.length?-1:e.reduce((e,o,n)=>Math.abs(e.position-t)<Math.abs(o.y-t)?e:{index:n,position:o.y},{index:0,position:e[0].y}).index}var nz=e.i(67275);function nD({withTabs:e}){let o=(0,A.useRouter)(),n=function({selector:e="h1, h2, h3, h4, h5, h6",getDepth:t=function(e){return Number(e.tagName[1])},getValue:o=function(e){return e.textContent||""},offset:n=0,scrollHost:r}={}){let[i,a]=(0,v.useState)(-1),[s,l]=(0,v.useState)(!1),[d,c]=(0,v.useState)([]),u=(0,v.useRef)([]),p=(0,v.useEffectEvent)(()=>{a(nB(u.current.map(e=>e.getNode().getBoundingClientRect()),n))}),h=()=>{let r=function(e,t,o,n){let r=[];for(let i=0;i<e.length;i+=1){let a=e[i];r.push({depth:t(a),value:o(a),id:a.id||(0,nP.f)(),getNode:()=>(function(e,t,o){if(e.isConnected)return e;let n=e.id?document.getElementById(e.id):null;return n||document.querySelectorAll(t)[o]||e})(a,n,i)})}return r}(Array.from(document.querySelectorAll(e)),t,o,e);u.current=r,l(!0),c(r),a(nB(r.map(e=>e.getNode().getBoundingClientRect()),n))};return(0,v.useEffect)(()=>{h();let e=r?"current"in r?r.current||window:r:window;return e.addEventListener("scroll",p),()=>e.removeEventListener("scroll",p)},[r,e,n]),{reinitialize:h,active:i,initialized:s,data:d}}({selector:"#mdx [data-heading]",getDepth:e=>Number(e.getAttribute("data-order")),getValue:e=>e.getAttribute("data-heading")||""}),r=n.data.filter(e=>e.depth>1);if(0===r.length)return null;let i=r.map((e,r)=>(0,t.jsx)(L.f,{component:"a",className:nz.default.link,mod:{active:n.active===r},href:`#${e.id}`,__vars:{"--toc-link-offset":`${e.depth-1}`},onClick:t=>{t.preventDefault(),o.replace(`${o.pathname}#${e.id}`)},children:e.value},e.id));return(0,t.jsx)(p.f,{component:"nav",mod:{"with-tabs":e},className:nz.default.wrapper,children:(0,t.jsx)("div",{className:nz.default.inner,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(L.f,{className:nz.default.title,children:"Table of contents"}),(0,t.jsxs)(ep.f.Autosize,{mah:"calc(100vh - 172px)",type:"never",children:[(0,t.jsx)("div",{className:nz.default.items,children:i}),(0,t.jsx)(nN,{h:"xl"})]})]})})})}var nI=e.i(62248);function n_({children:e,docgen:n,componentsProps:r,componentsStyles:i,stylesApiData:a,componentPrefix:s,migrations:l}){let d=(0,A.useRouter)(),[c,u]=(0,v.useState)("docs"),p=Array.isArray(r),h=Array.isArray(i),f=!!l;return((0,v.useEffect)(()=>{u(window.location.search.replace("?t=","")||"docs")},[]),p||h)?(0,t.jsxs)(I,{variant:"pills",value:c,classNames:{root:nI.default.root,list:nI.default.tabsList,tab:nI.default.tab},keepMounted:!1,radius:"md",onChange:e=>{d.replace("docs"===e?d.pathname:`${d.pathname}?t=${e}`),u(e)},children:[(0,t.jsx)("div",{className:nI.default.tabsWrapper,children:(0,t.jsx)(o.f,{size:"lg",children:(0,t.jsxs)(I.List,{children:[(0,t.jsx)(I.Tab,{value:"docs",children:(0,t.jsxs)("div",{className:nI.default.tabInner,children:[(0,t.jsx)($,{size:20,stroke:1.5,className:nI.default.tabIcon}),"Documentation"]})}),p&&(0,t.jsx)(I.Tab,{value:"props",children:(0,t.jsxs)("div",{className:nI.default.tabInner,children:[(0,t.jsx)(M,{size:20,stroke:1.5,className:nI.default.tabIcon}),"Props"]})}),h&&(0,t.jsx)(I.Tab,{value:"styles-api",children:(0,t.jsxs)("div",{className:nI.default.tabInner,children:[(0,t.jsx)(E,{size:20,stroke:1.5,className:nI.default.tabIcon}),"Styles API"]})}),f&&(0,t.jsx)(I.Tab,{value:"migrations",children:(0,t.jsxs)("div",{className:nI.default.tabInner,children:[(0,t.jsx)(F,{size:20,stroke:1.5,className:nI.default.tabIcon}),"Upgrade guide"]})})]})})}),(0,t.jsxs)(o.f,{size:"lg",children:[(0,t.jsx)(I.Panel,{value:"docs",children:(0,t.jsxs)("div",{className:nI.default.tabContent,"data-main":!0,children:[(0,t.jsx)("div",{className:nI.default.main,id:"mdx",children:e}),(0,t.jsx)("div",{className:nI.default.tableOfContents,children:(0,t.jsx)(nD,{withTabs:!0})})]})}),(0,t.jsx)(I.Panel,{value:"props",children:(0,t.jsx)("div",{className:nI.default.tabContent,"data-secondary":!0,children:(0,t.jsx)(e6,{components:r,componentPrefix:s,data:n})})}),(0,t.jsx)(I.Panel,{value:"styles-api",children:(0,t.jsx)("div",{className:nI.default.tabContent,"data-secondary":!0,children:a&&(0,t.jsx)(nR,{data:a,components:i,componentPrefix:s})})}),f&&(0,t.jsx)(I.Panel,{value:"migrations",children:(0,t.jsxs)("div",{className:nI.default.tabContent,"data-main":!0,"data-migrations":!0,children:[(0,t.jsx)("div",{className:nI.default.main,id:"mdx",children:l}),(0,t.jsx)("div",{className:nI.default.tableOfContents,children:(0,t.jsx)(nD,{withTabs:!0})})]})})]})]}):null}var nE=e.i(35629),nF=e.i(5378);function nM({size:e,style:o,...n}){return(0,t.jsxs)(p.f,{component:"svg",...n,preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",style:[{width:(0,Q.t)(e),height:(0,Q.t)(e)},o],children:[(0,t.jsx)("path",{d:"M0 256V0h256v256z",fill:"#C12127"}),(0,t.jsx)("path",{d:"M48 48h160v160h-32V80h-48v128H48z",fill:"#FFF"})]})}let n$=(0,_.f)("outline","edit","Edit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]);var nA=e.i(72316);let nV=(0,_.f)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]]),nL=(0,_.f)("outline","package","Package",[["path",{d:"M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5",key:"svg-0"}],["path",{d:"M12 12l8 -4.5",key:"svg-1"}],["path",{d:"M12 12l0 9",key:"svg-2"}],["path",{d:"M12 12l-8 -4.5",key:"svg-3"}],["path",{d:"M16 5.25l-8 4.5",key:"svg-4"}]]),nW=(0,_.f)("outline","user-code","UserCode",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h3.5",key:"svg-1"}],["path",{d:"M20 21l2 -2l-2 -2",key:"svg-2"}],["path",{d:"M17 17l-2 2l2 2",key:"svg-3"}]]),nq=(0,_.f)("outline","versions","Versions",[["path",{d:"M10 7a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2l0 -10",key:"svg-0"}],["path",{d:"M7 7l0 10",key:"svg-1"}],["path",{d:"M4 8l0 8",key:"svg-2"}]]);var nG=e.i(58966),nH=e.i(86156);function nK({label:e,icon:o,children:n,link:r}){let i=r?.startsWith("#")??!1,a=r?(0,t.jsxs)("a",{href:r,target:i?void 0:"_blank",rel:i?void 0:"noreferrer",onClick:i?e=>{r&&(e.preventDefault(),document.querySelector(r)?.scrollIntoView({behavior:"smooth"}))}:void 0,className:nH.default.body,children:[(0,t.jsx)("div",{className:nH.default.icon,children:o}),(0,t.jsx)("div",{className:nH.default.content,children:n})]}):(0,t.jsxs)("div",{className:nH.default.body,children:[(0,t.jsx)("div",{className:nH.default.icon,children:o}),(0,t.jsx)("div",{className:nH.default.content,children:n})]});return(0,t.jsxs)("div",{className:nH.default.root,children:[(0,t.jsx)("div",{className:nH.default.label,children:e}),a]})}var nU=e.i(4469);function nY({data:e}){return(0,t.jsx)("header",{className:nU.default.root,children:(0,t.jsxs)(o.f,{size:"lg",children:[(0,t.jsx)(e3.f,{className:nU.default.title,children:e.packageName}),(0,t.jsx)(L.f,{className:nU.default.description,children:e.packageDescription}),(0,t.jsxs)("div",{className:nU.default.links,children:[(0,t.jsx)(nK,{label:"Version",icon:(0,t.jsx)(nq,{size:18,stroke:1.5}),children:(0,t.jsxs)(nE.f,{children:["v",nG.default.version]})}),(0,t.jsx)(nK,{label:"Changelog",icon:(0,t.jsx)(nF.f,{size:16}),link:`${e.repositoryUrl}/releases/tag/${nG.default.version}`,children:"View the Changelog"}),(0,t.jsx)(nK,{label:"Source",icon:(0,t.jsx)(nF.f,{size:16}),link:e.repositoryUrl,children:"View source code"}),(0,t.jsx)(nK,{label:"Package",icon:(0,t.jsx)(nM,{size:16}),link:`https://npmjs.com/package/${e.packageName}`,children:e.packageName}),(0,t.jsx)(nK,{label:"See More",icon:(0,t.jsx)(nL,{size:16}),link:"https://mantine-extensions.vercel.app/",children:"Mantine Extensions"}),(0,t.jsx)(nK,{label:"Docs",icon:(0,t.jsx)(n$,{size:18,stroke:1.5}),link:e.mdxFileUrl,children:"Edit this page"}),(0,t.jsxs)(nK,{label:"Built by",icon:(0,t.jsx)(nW,{size:18,stroke:1.5}),link:`https://github.com/${e.author.githubUsername}`,children:[e.author.name," ",(0,t.jsxs)(L.f,{span:!0,c:"dimmed",inherit:!0,children:["(@",e.author.githubUsername,")"]})]}),(0,t.jsx)(nK,{label:"License",icon:(0,t.jsx)(nV,{size:18,stroke:1.5}),link:e.licenseUrl,children:"MIT"}),(0,t.jsx)(nK,{label:"Support",icon:(0,t.jsx)(nA.f,{color:"red",size:18,stroke:1.5}),link:"#sponsors",children:"Become a sponsor"})]})]})})}e.i(87090);var nX=e.i(75842),nZ=e.i(86233),nJ=e.i(79826),nQ=e.i(50461),n0=e.i(67324),n1=e.i(93299);function n2(e){try{return e&&JSON.parse(e)}catch{return e}}function n3(e){return{getItem:t=>{try{return window[e].getItem(t)}catch(e){return console.warn("use-local-storage: Failed to get value from storage, localStorage is blocked"),null}},setItem:(t,o)=>{try{window[e].setItem(t,o)}catch(e){console.warn("use-local-storage: Failed to set value to storage, localStorage is blocked")}},removeItem:t=>{try{window[e].removeItem(t)}catch(e){console.warn("use-local-storage: Failed to remove value from storage, localStorage is blocked")}}}}function n4({size:e,style:o,...n}){return(0,t.jsxs)(p.f,{component:"svg",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",style:[{width:(0,Q.t)(e),height:(0,Q.t)(e)},o],...n,children:[(0,t.jsx)("path",{fill:"#368FB9",d:"M128 0C57.328 0 0 57.328 0 128s57.328 128 128 128 128-57.328 128-128S198.672 0 128 0"}),(0,t.jsx)("path",{fill:"#FFF",d:"M203.317 174.06c-7.907 1.878-11.91 3.608-21.695 9.983-15.271 9.884-31.976 14.48-31.976 14.48s-1.383 2.076-5.387 3.015c-6.918 1.68-32.963 3.114-35.335 3.163-6.376.05-10.28-1.63-11.367-4.25-3.311-7.907 4.744-11.367 4.744-11.367s-1.779-1.087-2.817-2.076c-.939-.939-1.927-2.816-2.224-2.125-1.235 3.015-1.878 10.379-5.189 13.69-4.547 4.596-13.146 3.064-18.236.395-5.585-2.965.395-9.933.395-9.933s-3.015 1.779-5.436-1.878c-2.175-3.36-4.2-9.094-3.657-16.16.593-8.056 9.587-15.865 9.587-15.865s-1.581-11.91 3.608-24.117c4.695-11.12 17.347-20.065 17.347-20.065s-10.626-11.762-6.672-22.338c2.57-6.92 3.608-6.87 4.448-7.166 2.965-1.137 5.831-2.373 7.957-4.695 10.625-11.466 24.166-9.292 24.166-9.292s6.425-19.52 12.356-15.715c1.828 1.186 8.401 15.814 8.401 15.814s7.018-4.102 7.809-2.57c4.25 8.254 4.744 24.019 2.866 33.607-3.163 15.814-11.07 24.315-14.233 29.652-.741 1.236 8.5 5.14 14.332 21.3 5.387 14.777.593 27.182 1.433 28.566.148.247.198.346.198.346s6.177.494 18.582-7.166c6.622-4.102 14.48-8.698 23.425-8.797 8.65-.149 9.094 9.983 2.57 11.564zm11.763-7.265c-.89-7.017-6.82-11.86-14.431-11.762-11.367.148-20.905 6.03-27.231 9.934-2.471 1.532-4.596 2.669-6.425 3.509.395-5.733.05-13.245-2.916-21.498-3.608-9.885-8.45-15.963-11.91-19.472 4.003-5.832 9.489-14.332 12.058-27.478 2.224-11.219 1.533-28.664-3.558-38.45-1.038-1.976-2.767-3.41-4.942-4.003-.89-.247-2.57-.741-5.881.198-4.991-10.329-6.721-11.416-8.056-12.306-2.767-1.779-6.029-2.174-9.093-1.038-4.102 1.483-7.61 5.437-10.922 12.454a51.47 51.47 0 00-1.334 3.015c-6.277.445-16.161 2.718-24.513 11.762-1.038 1.137-3.064 1.977-5.19 2.768h.05c-4.349 1.532-6.326 5.09-8.747 11.515-3.361 8.994.098 17.84 3.508 23.574-4.645 4.151-10.823 10.773-14.084 18.532-4.053 9.588-4.498 18.978-4.35 24.068-3.459 3.658-8.796 10.527-9.39 18.237-.79 10.773 3.114 18.088 4.844 20.756.494.791 1.038 1.434 1.63 2.076-.197 1.334-.246 2.768.05 4.25.643 3.46 2.817 6.277 6.128 8.056 6.524 3.46 15.617 4.942 22.635 1.433 2.52 2.669 7.117 5.239 15.469 5.239h.494c2.125 0 29.109-1.433 36.967-3.36 3.509-.841 5.93-2.324 7.512-3.658 5.04-1.582 18.977-6.326 32.123-14.826 9.291-6.03 12.504-7.315 19.423-8.995 6.72-1.63 10.922-7.759 10.082-14.53z"})]})}!function(e){let{getItem:t}=n3(e)}("localStorage");var n5=e.i(29801);function n9({yarnScript:e,npmScript:o}){var n;let[r,i]=(n={key:"script-tab-value",defaultValue:"yarn"},(function(e,t){let o="localStorage"===e?"mantine-local-storage":"mantine-session-storage",{getItem:n,setItem:r,removeItem:i}=n3(e);return function({key:a,defaultValue:s,getInitialValueInEffect:l=!0,sync:d=!0,deserialize:c=n2,serialize:u=e=>(function(e,t="use-local-storage"){try{return JSON.stringify(e)}catch(e){throw Error(`@mantine/hooks ${t}: Failed to serialize the value`)}})(e,t)}){let p=(0,v.useCallback)(t=>{let o;try{o="u"<typeof window||!(e in window)||null===window[e]||!!t}catch(e){o=!0}if(o)return s;let r=n(a);return null!==r?c(r):s},[a,s]),[h,f]=(0,v.useState)(p(l)),m=(0,v.useCallback)(e=>{e instanceof Function?f(t=>{let n=e(t);return r(a,u(n)),queueMicrotask(()=>{window.dispatchEvent(new CustomEvent(o,{detail:{key:a,value:n}}))}),n}):(r(a,u(e)),window.dispatchEvent(new CustomEvent(o,{detail:{key:a,value:e}})),f(e))},[a]),g=(0,v.useCallback)(()=>{i(a),f(s),window.dispatchEvent(new CustomEvent(o,{detail:{key:a,value:s}}))},[a,s]);return(0,n1.f)("storage",t=>{d&&t.storageArea===window[e]&&t.key===a&&f(c(t.newValue??void 0))}),(0,n1.f)(o,e=>{d&&e.detail.key===a&&f(e.detail.value)}),(0,v.useEffect)(()=>{void 0!==s&&void 0===h&&m(s)},[s,h,m]),(0,v.useEffect)(()=>{let e=p();void 0!==e&&m(e)},[a]),[void 0===h?s:h,m,g]}})("localStorage","use-local-storage")(n));return(0,t.jsxs)(I,{value:r,onChange:e=>i(e),variant:"pills",classNames:n5.default,children:[(0,t.jsxs)(I.List,{children:[(0,t.jsx)(I.Tab,{value:"yarn",children:(0,t.jsxs)(oo.f,{gap:5,children:[(0,t.jsx)(n4,{className:n5.default.icon,size:16}),(0,t.jsx)("span",{children:"yarn"})]})}),(0,t.jsx)(I.Tab,{value:"npm",children:(0,t.jsxs)(oo.f,{gap:5,children:[(0,t.jsx)(nM,{className:n5.default.icon,size:16}),(0,t.jsx)("span",{children:"npm"})]})})]}),(0,t.jsx)(I.Panel,{value:"yarn",children:(0,t.jsx)(tj,{className:n5.default.code,code:e,language:"bash","data-without-radius":!0})}),(0,t.jsx)(I.Panel,{value:"npm",children:(0,t.jsx)(tj,{className:n5.default.code,code:o,language:"bash"})})]})}function n6({packages:e,dev:o}){return(0,t.jsx)(n9,{yarnScript:`yarn add ${o?"--dev ":""}${e}`,npmScript:`npm install ${o?"--save-dev ":""}${e}`})}let n8=(0,_.f)("outline","check","Check",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]]),n7=(0,_.f)("outline","external-link","ExternalLink",[["path",{d:"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6",key:"svg-0"}],["path",{d:"M11 13l9 -9",key:"svg-1"}],["path",{d:"M15 4h5v5",key:"svg-2"}]]),re=(0,_.f)("outline","x","X",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);e.i(22661);var rt=e.i(25085),ro=e.i(5369),rn=e.i(18512),rr=e.i(62232),ri=e.i(55332),ra=e.i(11383);let rs={type:"configurator",component:function(e){let[o,{close:n,open:r}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"A simple example of the Focus Reveal component"}),(0,t.jsx)(L.f,{children:"👉 Scroll up the page to remove the focus"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:r,children:"Set the Focus to the below component"})}),(0,t.jsx)(rn.f,{my:256}),(0,t.jsxs)(oo.f,{justify:"center",children:[(0,t.jsx)(ra.g,{testimonial:0}),(0,t.jsx)(rt.f.FocusReveal,{focused:o,...e,onBlur:n,children:(0,t.jsx)(ra.g,{testimonial:1})})]})]})},code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour, type OnboardingTourFocusRevealProps} from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>A simple example of the Focus Reveal component</Title>
      <Text>👉 Scroll up the page to remove the focus</Text>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={256} />

      <Group justify="center">
        <Testimonials testimonial={0} />
        <OnboardingTour.FocusReveal focused={focused} {{props}} onBlur={close}>
          <Testimonials testimonial={1} />
        </OnboardingTour.FocusReveal>
      </Group>
    </Stack>
  );
}
`,language:"tsx"}],controls:[{prop:"withReveal",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withOverlay",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"focusedMode",type:"select",initialValue:"none",libraryValue:"none",data:[{label:"None",value:"none"},{label:"Pulse",value:"pulse"},{label:"Glow",value:"glow"},{label:"Border",value:"border"},{label:"Elastic",value:"elastic"},{label:"Glow Blue",value:"glow-blue"},{label:"Glow Green",value:"glow-green"},{label:"Glow Red",value:"glow-red"},{label:"Rotate",value:"rotate"},{label:"Scale",value:"scale"},{label:"Shake",value:"shake"},{label:"Zoom",value:"zoom"}]}]};var rl=e.i(66911);let rd={type:"code",component:function(){let[e,o]=(0,v.useState)(-1);return(0,rl.f)(e>=0?[["ArrowRight",()=>o(e+1<3?e+1:0)],["ArrowLeft",()=>o(e-1>=0?e-1:2)]]:[]),(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:1,children:"Cycle Example"}),(0,t.jsx)(L.f,{fs:"italic",children:"Use the arrow keys to cycle through the testimonials"}),(0,t.jsx)(n0.f,{onClick:()=>o(0),children:"Start"}),(0,t.jsx)(oo.f,{justify:"center",children:ra.o.map((n,r)=>r<3&&(0,t.jsx)(rt.f.FocusReveal,{focused:e===r,transitionProps:{duration:0,exitDuration:0},onBlur:()=>o(-1),focusedMode:"zoom",children:(0,t.jsx)(ra.g,{testimonial:0,children:(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(n0.f,{size:"xs",variant:"gradient",onClick:()=>o(r+1<3?r+1:0),children:"Next"})})},`box-${r}`)},`focus-reveal-${r}`))})]})},code:`
import { useState } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

function Demo() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  // Listen to the arrows only while cycling: a registered hotkey calls preventDefault on every
  // press, and would take the arrows from the rest of the page even when it has nothing to do
  useHotkeys(
    focusIndex >= 0
      ? [
          ['ArrowRight', () => setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0)],
          [
            'ArrowLeft',
            () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1),
          ],
        ]
      : []
  );

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Cycle Example</Title>
      <Text fs="italic">Use the arrow keys to cycle through the testimonials</Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < MAX_TESTIMONIALS && (
              <OnboardingTour.FocusReveal
                key={\`focus-reveal-$\{index}\`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={\`box-$\{index}\`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() => setFocusIndex(index + 1 < MAX_TESTIMONIALS ? index + 1 : 0)}
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </OnboardingTour.FocusReveal>
            )
        )}
      </Group>
    </Stack>
  );
}
`,defaultExpanded:!1};var rc=e.i(1281);let ru={type:"code",component:function(){let[e,o]=(0,v.useState)(-1);return(0,rl.f)(e>=0?[["ArrowRight",()=>o(e+1<3?e+1:0)],["ArrowLeft",()=>o(e-1>=0?e-1:2)]]:[]),(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:1,children:"Multiple components Example"}),(0,t.jsx)(L.f,{fs:"italic",children:"Use the arrow keys to cycle through the testimonials"}),(0,t.jsx)(n0.f,{onClick:()=>o(0),children:"Start"}),(0,t.jsx)(oo.f,{justify:"center",children:ra.o.map((n,r)=>r<3&&(0,t.jsx)(rt.f.FocusReveal,{focused:e===r,transitionProps:{duration:0,exitDuration:0},onBlur:()=>o(-1),focusedMode:"zoom",children:(0,t.jsx)(ra.g,{testimonial:0,children:(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(n0.f,{size:"xs",variant:"gradient",onClick:()=>o(r+1<3?r+1:0),children:"Next"})})},`box-${r}`)},`focus-reveal-${r}`))}),e>=0&&(0,t.jsx)(rt.f.FocusReveal,{defaultFocused:!0,withReveal:!1,children:(0,t.jsx)(rc.f,{withBorder:!0,shadow:"sm",p:16,mt:32,children:(0,t.jsxs)(oo.f,{children:[(0,t.jsx)(L.f,{children:["This is the first description.","This is the second description.","This is the third description.","This is the fourth description."][e]}),(0,t.jsx)(n0.f,{size:"xs",onClick:()=>o(-1),children:"Stop"})]})})})]})},code:`
import { useState } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

function Demo() {
  const [focusIndex, setFocusIndex] = useState(-1);
  const MAX_TESTIMONIALS = 3;

  // Listen to the arrows only while cycling: a registered hotkey calls preventDefault on every
  // press, and would take the arrows from the rest of the page even when it has nothing to do
  useHotkeys(
    focusIndex >= 0
      ? [
          ['ArrowRight', () => setFocusIndex(focusIndex + 1 < MAX_TESTIMONIALS ? focusIndex + 1 : 0)],
          [
            'ArrowLeft',
            () => setFocusIndex(focusIndex - 1 >= 0 ? focusIndex - 1 : MAX_TESTIMONIALS - 1),
          ],
        ]
      : []
  );

  const descriptions = [
    'This is the first description.',
    'This is the second description.',
    'This is the third description.',
    'This is the fourth description.',
  ];

  return (
    <Stack justify="center" align="center">
      <Title order={1}>Multiple components Example</Title>
      <Text fs="italic">Use the arrow keys to cycle through the testimonials</Text>
      <Button onClick={() => setFocusIndex(0)}>Start</Button>

      <Group justify="center">
        {testimonials.map(
          (_, index) =>
            index < MAX_TESTIMONIALS && (
              <OnboardingTour.FocusReveal
                key={\`focus-reveal-$\{index}\`}
                focused={focusIndex === index}
                transitionProps={{ duration: 0, exitDuration: 0 }}
                onBlur={() => setFocusIndex(-1)}
                focusedMode="zoom"
              >
                <Testimonials key={\`box-$\{index}\`} testimonial={0}>
                  <Group justify="center">
                    <Button
                      size="xs"
                      variant="gradient"
                      onClick={() => setFocusIndex(index + 1 < MAX_TESTIMONIALS ? index + 1 : 0)}
                    >
                      Next
                    </Button>
                  </Group>
                </Testimonials>
              </OnboardingTour.FocusReveal>
            )
        )}
      </Group>
      {focusIndex >= 0 && (
        <OnboardingTour.FocusReveal defaultFocused={true} withReveal={false}>
          <Paper withBorder shadow="sm" p={16} mt={32}>
            <Group>
              <Text>{descriptions[focusIndex]}</Text>
              <Button size="xs" onClick={() => setFocusIndex(-1)}>
                Stop
              </Button>
            </Group>
          </Paper>
        </OnboardingTour.FocusReveal>
      )}
    </Stack>
  );
}
`,defaultExpanded:!1},rp={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),[r,i]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Disable target interactions"}),(0,t.jsx)(ro.f,{children:(0,t.jsxs)(oo.f,{children:[(0,t.jsx)(n0.f,{onClick:o,children:"Focus the component"}),(0,t.jsx)(tL,{label:"Disable target interactions",checked:r,onChange:()=>i.toggle()})]})}),(0,t.jsx)(rn.f,{my:100}),(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:n,disableTargetInteraction:r,withOverlay:!0,children:(0,t.jsxs)(rr.f,{align:"center",children:[(0,t.jsx)(ra.g,{testimonial:1,withButton:!0}),(0,t.jsx)(n0.f,{children:"Click inside (will not fire when focused)"}),(0,t.jsx)(L.f,{size:"sm",c:"dimmed",children:"Interaction disabled while focused: pointer events are blocked."})]})})}),(0,t.jsx)(rn.f,{my:100})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Switch, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { open, close }] = useDisclosure(false);
  const [disableTargetInteraction, setDisableTargetInteraction] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Disable target interactions</Title>

      <Center>
        <Group>
          <Button onClick={open}>Focus the component</Button>
          <Switch
            label="Disable target interactions"
            checked={disableTargetInteraction}
            onChange={() => setDisableTargetInteraction.toggle()}
          />
        </Group>
      </Center>

      <Divider my={100} />

      <Group justify="center">
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          disableTargetInteraction={disableTargetInteraction}
          withOverlay
        >
          <Stack align="center">
            <Testimonials testimonial={1} withButton />
            <Button>Click inside (will not fire when focused)</Button>
            <Text size="sm" c="dimmed">
              Interaction disabled while focused: pointer events are blocked.
            </Text>
          </Stack>
        </OnboardingTour.FocusReveal>
      </Group>

      <Divider my={100} />
    </Stack>
  );
}
`,defaultExpanded:!1};var rh=e.i(92106);let rf={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Custom Focused Mode Example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Set the Focus to the below component"})}),(0,t.jsx)(rn.f,{my:100,label:"Divider"}),(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,className:rh.default.custom,children:(0,t.jsx)(ra.g,{testimonial:1})})})]})},code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './CustomMode.module.css';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Custom Focused Mode Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={100} label="Divider" />

      <Group justify="center">
        <OnboardingTour.FocusReveal focused={focused} onBlur={close} className={classes.custom}>
          <Testimonials testimonial={1} />
        </OnboardingTour.FocusReveal>
      </Group>
    </Stack>
  );
}
`,language:"tsx"},{fileName:"Custom.module.css",code:`
.custom {
  &[data-onboarding-tour-focus-reveal-focused='true'] {
    border: 4px solid red;
    transform: rotateZ(2deg);
  }
}
`}],defaultExpanded:!1},rm={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Group Example"}),(0,t.jsx)(ro.f,{children:(0,t.jsxs)(L.f,{children:["The ",(0,t.jsx)(ti,{children:"defaultFocused"})," props is set to ",(0,t.jsx)(ti,{children:"true"}),", card below is focused by default"]})}),(0,t.jsx)(rn.f,{mb:600,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.f,{fz:48,children:"👇"}),(0,t.jsx)(L.f,{children:"Scroll down"})]})})]}),(0,t.jsx)(rt.f.FocusReveal.Group,{focusedMode:"scale",children:(0,t.jsxs)(rr.f,{children:[(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{children:(0,t.jsx)(ra.g,{testimonial:0})})}),(0,t.jsx)(rn.f,{my:200}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{children:(0,t.jsx)(ra.g,{testimonial:1})})}),(0,t.jsx)(rn.f,{my:200}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{children:(0,t.jsx)(ra.g,{testimonial:2})})}),(0,t.jsx)(rn.f,{my:200})]})})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';

function Demo() {
  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

        <Center>
          <Text>
            The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
            by default
          </Text>
        </Center>

        <Divider mb={600}
          label={
            <>
              <Text fz={48}>👇</Text>
              <Text>Scroll down</Text>
            </>
          }
        />
      </Stack>

      <OnboardingTour.FocusReveal.Group focusedMode="scale">
        <Stack>
          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={0} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={1} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={200} />

          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={2} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={200} />
        </Stack>
      </OnboardingTour.FocusReveal.Group>
    </>
  );
}
`,defaultExpanded:!1},rg=["border","elastic","glow","glow-blue","glow-green","glow-red","none","pulse","rotate","scale","shake","zoom"];function rx(e,t=document){let o=t.querySelector(e);if(o)return o;let n=t.querySelectorAll("*");for(let t=0;t<n.length;t+=1){let o=n[t];if(o.shadowRoot){let t=rx(e,o.shadowRoot);if(t)return t}}return null}function rb(e,t=document){let o=[],n=t.querySelectorAll(e);o.push(...Array.from(n));let r=t.querySelectorAll("*");for(let t=0;t<r.length;t+=1){let n=r[t];if(n.shadowRoot){let t=rb(e,n.shadowRoot);o.push(...t)}}return o}function rv(e){if(!e)return document;let t=e.getRootNode();return t instanceof ShadowRoot||t instanceof Document?t:document}function rj({defaultOpened:e,opened:t,onOpenedChange:o,onDropdownClose:n,onDropdownOpen:r,loop:i=!0,scrollBehavior:a="instant"}={}){let[s,l]=(0,P.f)({value:t,defaultValue:e,finalValue:!1,onChange:o}),d=(0,v.useRef)(null),c=(0,v.useRef)(-1),u=(0,v.useRef)(null),p=(0,v.useRef)(null),h=(0,v.useRef)(-1),f=(0,v.useRef)(-1),m=(0,v.useRef)(-1),g=(0,v.useCallback)((e="unknown")=>{s||(l(!0),r?.(e))},[l,r,s]),x=(0,v.useCallback)((e="unknown")=>{s&&(l(!1),n?.(e))},[l,n,s]),b=(0,v.useCallback)((e="unknown")=>{s?x(e):g(e)},[x,g,s]),j=(0,v.useCallback)(()=>{let e=rv(p.current);rx(`#${d.current} [data-combobox-selected]`,e)?.removeAttribute("data-combobox-selected")},[]),y=(0,v.useCallback)(e=>{let t=rv(p.current),o=rx(`#${d.current}`,t),n=o?rb("[data-combobox-option]",o):null;if(!n)return null;let r=e>=n.length?0:e<0?n.length-1:e;return(c.current=r,n?.[r]&&!n[r].hasAttribute("data-combobox-disabled"))?(j(),n[r].setAttribute("data-combobox-selected","true"),n[r].scrollIntoView({block:"nearest",behavior:a}),n[r].id):null},[a,j]),T=(0,v.useCallback)(()=>{let e=rv(p.current),t=rx(`#${d.current} [data-combobox-active]`,e);return t?y(rb(`#${d.current} [data-combobox-option]`,e).findIndex(e=>e===t)):y(0)},[y]),w=(0,v.useCallback)(()=>{let e=rv(p.current),t=rb(`#${d.current} [data-combobox-option]`,e);return y(function(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(c.current,t,i))},[y,i]),S=(0,v.useCallback)(()=>{let e=rv(p.current),t=rb(`#${d.current} [data-combobox-option]`,e);return y(function(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(c.current,t,i))},[y,i]),k=(0,v.useCallback)(()=>{let e=rv(p.current);return y(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(rb(`#${d.current} [data-combobox-option]`,e)))},[y]),C=(0,v.useCallback)((e="selected",t)=>{if("number"==typeof e){c.current=e;let o=rv(p.current),n=rb(`#${d.current} [data-combobox-option]`,o);t?.scrollIntoView&&n[e]?.scrollIntoView({block:"nearest",behavior:a});return}m.current=window.setTimeout(()=>{let o=rv(p.current),n=rb(`#${d.current} [data-combobox-option]`,o),r=n.findIndex(t=>t.hasAttribute(`data-combobox-${e}`));c.current=r,t?.scrollIntoView&&n[r]?.scrollIntoView({block:"nearest",behavior:a})},0)},[]),O=(0,v.useCallback)(()=>{c.current=-1,j()},[j]),R=(0,v.useCallback)(()=>{let e=rv(p.current);rb(`#${d.current} [data-combobox-option]`,e)?.[c.current]?.click()},[]),N=(0,v.useCallback)(e=>{d.current=e},[]),B=(0,v.useCallback)(()=>{h.current=window.setTimeout(()=>u.current?.focus(),0)},[]),z=(0,v.useCallback)(()=>{f.current=window.setTimeout(()=>p.current?.focus(),0)},[]),D=(0,v.useCallback)(()=>c.current,[]);return(0,v.useEffect)(()=>()=>{window.clearTimeout(h.current),window.clearTimeout(f.current),window.clearTimeout(m.current)},[]),{dropdownOpened:s,openDropdown:g,closeDropdown:x,toggleDropdown:b,selectedOptionIndex:c.current,getSelectedOptionIndex:D,selectOption:y,selectFirstOption:k,selectActiveOption:T,selectNextOption:w,selectPreviousOption:S,resetSelectedOption:O,updateSelectedOptionIndex:C,listId:d.current,setListId:N,clickSelectedOption:R,searchRef:u,focusSearchInput:B,targetRef:p,focusTarget:z}}let[ry,rT]=(0,h.f)("Combobox component was not found in tree");function rw({onMouseDown:e,onClick:o,onClear:n,...r}){return(0,t.jsx)(eQ.ClearButton,{tabIndex:-1,"aria-hidden":!0,...r,onMouseDown:t=>{t.preventDefault(),e?.(t)},onClick:e=>{n(),o?.(e)}})}rw.displayName="@mantine/core/ComboboxClearButton";let rS=(0,u.$)(e=>{let{classNames:o,styles:n,className:r,style:i,hidden:a,...s}=(0,d.f)("ComboboxDropdown",null,e),l=rT();return(0,t.jsx)(on.f.Dropdown,{...s,role:"presentation","data-hidden":a||void 0,"data-floating-height":l.floatingHeight||void 0,...l.getStyles("dropdown",{className:r,style:i,classNames:o,styles:n})})});rS.classes=oL,rS.displayName="@mantine/core/ComboboxDropdown";var rk=e.i(84126);let rC={refProp:"ref"},rO=(0,u.$)(e=>{let{children:o,refProp:n,ref:r}=(0,d.f)("ComboboxDropdownTarget",rC,e);if(rT(),!(0,rk.f)(o))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return(0,t.jsx)(on.f.Target,{ref:r,refProp:n,children:o})});rO.displayName="@mantine/core/ComboboxDropdownTarget";let rR=(0,u.$)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:a,...s}=(0,d.f)("ComboboxEmpty",null,e),l=rT();return(0,t.jsx)(p.f,{...l.getStyles("empty",{className:n,classNames:o,styles:i,style:r}),...s})});rR.classes=oL,rR.displayName="@mantine/core/ComboboxEmpty";var rN=e.i(86364),rP=e.i(95357);function rB({onKeyDown:e,onClick:t,withKeyboardNavigation:o,withAriaAttributes:n,withExpandedAttribute:r,targetType:i,autoComplete:a}){let s=rT(),[l,d]=(0,v.useState)(null);return{...n?{...r?{role:"combobox"}:{},"aria-haspopup":"listbox","aria-expanded":r?!!(s.store.listId&&s.store.dropdownOpened):void 0,"aria-controls":s.store.dropdownOpened&&s.store.listId?s.store.listId:void 0,"aria-activedescendant":s.store.dropdownOpened&&l||void 0,autoComplete:a,"data-expanded":s.store.dropdownOpened||void 0,"data-mantine-stop-propagation":s.store.dropdownOpened||void 0}:{},onKeyDown:t=>{if((e?.(t),!s.readOnly&&o)&&!t.nativeEvent.isComposing){if("ArrowDown"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectNextOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"ArrowUp"===t.nativeEvent.code&&(t.preventDefault(),s.store.dropdownOpened?d(s.store.selectPreviousOption()):(s.store.openDropdown("keyboard"),d(s.store.selectActiveOption()),s.store.updateSelectedOptionIndex("selected",{scrollIntoView:!0}))),"Enter"===t.nativeEvent.code||"NumpadEnter"===t.nativeEvent.code){if(229===t.nativeEvent.keyCode)return;let e=s.store.getSelectedOptionIndex();s.store.dropdownOpened&&-1!==e?(t.preventDefault(),s.store.clickSelectedOption()):"button"===i&&(t.preventDefault(),s.store.openDropdown("keyboard"))}"Escape"===t.key&&s.store.closeDropdown("keyboard"),"Space"===t.nativeEvent.code&&"button"===i&&(t.preventDefault(),s.store.toggleDropdown("keyboard"))}},onClick:e=>{"button"===i&&e.currentTarget.focus(),t?.(e)}}}let rz={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},rD=(0,u.$)(e=>{let{children:t,refProp:o,withKeyboardNavigation:n,withAriaAttributes:r,withExpandedAttribute:i,targetType:a,autoComplete:s,ref:l,...c}=(0,d.f)("ComboboxEventsTarget",rz,e),u=(0,rP.f)(t);if(!u)throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=rT(),h=rB({targetType:a,withAriaAttributes:r,withKeyboardNavigation:n,withExpandedAttribute:i,onKeyDown:u.props.onKeyDown,onClick:u.props.onClick,autoComplete:s});return(0,v.cloneElement)(u,{...h,...c,[o]:(0,tX.L)(l,p.store.targetRef,(0,rN.f)(u))})});rD.displayName="@mantine/core/ComboboxEventsTarget";let rI=(0,u.$)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:a,...s}=(0,d.f)("ComboboxFooter",null,e),l=rT();return(0,t.jsx)(p.f,{...l.getStyles("footer",{className:n,classNames:o,style:r,styles:i}),...s,onMouseDown:e=>{e.preventDefault()}})});rI.classes=oL,rI.displayName="@mantine/core/ComboboxFooter";let r_=(0,u.$)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:a,children:s,label:l,id:c,...u}=(0,d.f)("ComboboxGroup",null,e),h=rT(),f=(0,N.f)(c),m=null!=l&&!1!==l&&""!==l;return(0,t.jsxs)(p.f,{role:"group","aria-labelledby":m?f:void 0,...h.getStyles("group",{className:n,classNames:o,style:r,styles:i}),...u,children:[m&&(0,t.jsx)("div",{id:f,...h.getStyles("groupLabel",{classNames:o,styles:i}),children:l}),s]})});r_.classes=oL,r_.displayName="@mantine/core/ComboboxGroup";let rE=(0,u.$)(e=>{let{classNames:o,className:n,style:r,styles:i,vars:a,...s}=(0,d.f)("ComboboxHeader",null,e),l=rT();return(0,t.jsx)(p.f,{...l.getStyles("header",{className:n,classNames:o,style:r,styles:i}),...s,onMouseDown:e=>{e.preventDefault()}})});function rF({value:e,valuesDivider:o=",",...n}){return(0,t.jsx)("input",{type:"hidden",value:Array.isArray(e)?e.join(o):e?`${e}`:"",...n})}rE.classes=oL,rE.displayName="@mantine/core/ComboboxHeader",rF.displayName="@mantine/core/ComboboxHiddenInput";let rM=(0,u.$)(e=>{let o=(0,d.f)("ComboboxOption",null,e),{classNames:n,className:r,style:i,styles:a,vars:s,onClick:l,id:c,active:u,onMouseDown:h,onMouseOver:f,disabled:m,selected:g,mod:x,...b}=o,j=rT(),y=(0,v.useId)();return(0,t.jsx)(p.f,{...j.getStyles("option",{className:r,classNames:n,styles:a,style:i}),"aria-disabled":m||void 0,...b,id:c||y,mod:["combobox-option",{"combobox-active":u,"combobox-disabled":m,"combobox-selected":g},x],role:"option",onClick:e=>{m?e.preventDefault():(j.onOptionSubmit?.(o.value,o),l?.(e))},onMouseDown:e=>{e.preventDefault(),h?.(e)},onMouseOver:e=>{j.resetSelectionOnOptionHover&&j.store.resetSelectedOption(),f?.(e)}})});rM.classes=oL,rM.displayName="@mantine/core/ComboboxOption";let r$=(0,u.$)(e=>{let{classNames:o,className:n,style:r,styles:i,id:a,onMouseDown:s,labelledBy:l,...c}=(0,d.f)("ComboboxOptions",null,e),u=rT(),h=(0,N.f)(a);return(0,v.useEffect)(()=>{u.store.setListId(h)},[h]),(0,t.jsx)(p.f,{...u.getStyles("options",{className:n,style:r,classNames:o,styles:i}),...c,id:h,role:"listbox","aria-labelledby":l,onMouseDown:e=>{e.preventDefault(),s?.(e)}})});r$.classes=oL,r$.displayName="@mantine/core/ComboboxOptions";let rA={withAriaAttributes:!0,withKeyboardNavigation:!0},rV=(0,u.$)(e=>{let{classNames:o,styles:n,unstyled:r,vars:i,withAriaAttributes:a,onKeyDown:s,onClick:l,withKeyboardNavigation:c,size:u,ref:p,...h}=(0,d.f)("ComboboxSearch",rA,e),f=rT(),m=f.getStyles("search"),g=rB({targetType:"input",withAriaAttributes:a,withKeyboardNavigation:c,withExpandedAttribute:!1,onKeyDown:s,onClick:l,autoComplete:"off"});return(0,t.jsx)(eQ,{ref:(0,tX.L)(p,f.store.searchRef),classNames:[{input:m.className},o],styles:[{input:m.style},n],size:u||f.size,...g,...h,__staticSelector:"Combobox"})});rV.classes=oL,rV.displayName="@mantine/core/ComboboxSearch";let rL={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},rW=(0,u.$)(e=>{let{children:o,refProp:n,withKeyboardNavigation:r,withAriaAttributes:i,withExpandedAttribute:a,targetType:s,autoComplete:l,ref:c,...u}=(0,d.f)("ComboboxTarget",rL,e),p=(0,rP.f)(o);if(!p)throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let h=rT(),f=rB({targetType:s,withAriaAttributes:i,withKeyboardNavigation:r,withExpandedAttribute:a,onKeyDown:p.props.onKeyDown,onClick:p.props.onClick,autoComplete:l}),m=(0,v.cloneElement)(p,{...f,...u});return(0,t.jsx)(on.f.Target,{refProp:n,ref:(0,tX.L)(c,h.store.targetRef),children:m})});rW.displayName="@mantine/core/ComboboxTarget";let rq={keepMounted:!0,keepMountedMode:"display-none",withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0},size:"sm"},rG=(0,i.f)((e,{size:t,dropdownPadding:o})=>({options:{"--combobox-option-fz":(0,r.o)(t),"--combobox-option-padding":(0,r.K)(t,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===o?void 0:(0,Q.t)(o),"--combobox-option-fz":(0,r.o)(t),"--combobox-option-padding":(0,r.K)(t,"combobox-option-padding")}})),rH=e=>{let o=(0,d.f)("Combobox",rq,e),{classNames:n,styles:r,unstyled:i,children:a,store:s,vars:l,onOptionSubmit:u,onClose:p,size:h,dropdownPadding:f,resetSelectionOnOptionHover:m,__staticSelector:g,readOnly:x,attributes:b,floatingHeight:v,middlewares:j,...y}=o,T="viewport"===v?{...j,flip:!1,size:{..."object"==typeof j?.size?j.size:{},padding:"object"==typeof j?.size&&void 0!==j.size.padding?j.size.padding:10,apply:({availableHeight:e,availableWidth:t,elements:o,...n})=>{o.floating.style.setProperty("--combobox-floating-max-height",`${e}px`);let r=j?.size;"object"==typeof r&&r.apply?r.apply({availableHeight:e,availableWidth:t,elements:o,...n}):r&&Object.assign(o.floating.style,{maxWidth:`${t}px`,maxHeight:`${e}px`})}}}:j,w=rj(),S=s||w,k=(0,c.f)({name:g||"Combobox",classes:oL,props:o,classNames:n,styles:r,unstyled:i,attributes:b,vars:l,varsResolver:rG});return(0,t.jsx)(ry,{value:{getStyles:k,store:S,onOptionSubmit:u,size:h,resetSelectionOnOptionHover:m,readOnly:x,floatingHeight:v},children:(0,t.jsx)(on.f,{opened:S.dropdownOpened,...y,middlewares:T,onChange:e=>!e&&void(p?.(),S.closeDropdown()),withRoles:!1,unstyled:i,children:a})})};function rK(e){return"group"in e}function rU({data:e,withCheckIcon:o,withAlignedLabels:n,value:r,checkIconPosition:i,unstyled:a,renderOption:s}){if(!rK(e)){var l;let d=(l=e.value,Array.isArray(r)?r.includes(l):r===l),c=o&&(d?(0,t.jsx)(ot._,{className:oL.optionsDropdownCheckIcon}):n?(0,t.jsx)("div",{className:oL.optionsDropdownCheckPlaceholder}):null),u=(0,t.jsxs)(t.Fragment,{children:["left"===i&&c,(0,t.jsx)("span",{children:e.label}),"right"===i&&c]});return(0,t.jsx)(rH.Option,{value:e.value,disabled:e.disabled,className:(0,ey.f)({[oL.optionsDropdownOption]:!a}),"data-reverse":"right"===i||void 0,"data-checked":d||void 0,"aria-selected":d,active:d,children:"function"==typeof s?s({option:e,checked:d}):u})}let d=e.items.map(e=>(0,t.jsx)(rU,{data:e,value:r,unstyled:a,withCheckIcon:o,withAlignedLabels:n,checkIconPosition:i,renderOption:s},`${e.value}`));return(0,t.jsx)(rH.Group,{label:e.group,children:d})}function rY({data:e,hidden:o,hiddenWhenEmpty:n,filter:r,search:i,limit:a,maxDropdownHeight:s,floatingHeight:l,withScrollArea:d=!0,filterOptions:c=!0,withCheckIcon:u=!1,withAlignedLabels:p=!1,value:h,checkIconPosition:f,nothingFoundMessage:m,unstyled:g,labelId:x,renderOption:b,scrollAreaProps:v,"aria-label":j}){let y=rT();!function e(t,o=new Set){if(Array.isArray(t))for(let n of t)if(rK(n))e(n.items,o);else{if(void 0===n.value)throw Error("[@mantine/core] Each option must have value property");if(o.has(n.value))throw Error(`[@mantine/core] Duplicate options are not supported. Option with value "${n.value}" was provided more than once`);o.add(n.value)}}(e);let T="string"==typeof i?(r||function e({options:t,search:o,limit:n}){let r=o.trim().toLowerCase(),i=[];for(let a=0;a<t.length;a+=1){let s=t[a];if(i.length===n)break;rK(s)&&i.push({group:s.group,items:e({options:s.items,search:o,limit:n-i.length})}),!rK(s)&&s.label.toLowerCase().includes(r)&&i.push(s)}return i})({options:e,search:c?i:"",limit:a??1/0}):e,w=function(e){if(0===e.length)return!0;for(let t of e)if(!("group"in t)||t.items.length>0)return!1;return!0}(T),S=T.map((e,o)=>(0,t.jsx)(rU,{data:e,withCheckIcon:u,withAlignedLabels:p,value:h,checkIconPosition:f,unstyled:g,renderOption:b},rK(e)?`group-${"string"==typeof e.group?e.group:o}`:`${e.value}`));return(0,t.jsx)(rH.Dropdown,{hidden:o||n&&w,"data-composed":!0,children:(0,t.jsxs)(rH.Options,{labelledBy:x,"aria-label":j,children:[d?(0,t.jsx)(ep.f.Autosize,{mah:(l??y.floatingHeight)==="viewport"?"var(--combobox-floating-options-max-height)":s??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...v,children:S}):S,w&&m&&(0,t.jsx)(rH.Empty,{children:m})]})})}rH.extend=e=>e,rH.classes=oL,rH.varsResolver=rG,rH.displayName="@mantine/core/Combobox",rH.Target=rW,rH.Dropdown=rS,rH.Options=r$,rH.Option=rM,rH.Search=rV,rH.Empty=rR,rH.Chevron=oG,rH.Footer=rI,rH.Header=rE,rH.EventsTarget=rD,rH.DropdownTarget=rO,rH.Group=r_,rH.ClearButton=rw,rH.HiddenInput=rF;let rX={size:"sm",withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left",openOnFocus:!0},rZ=(0,u.b)(e=>{let o,n=(0,d.f)(["Input","InputWrapper","Select"],rX,e),{classNames:r,styles:i,unstyled:a,vars:s,dropdownOpened:l,defaultDropdownOpened:c,onDropdownClose:u,onDropdownOpen:p,onFocus:h,onBlur:f,onClick:m,onChange:g,data:x,value:b,defaultValue:j,selectFirstOptionOnChange:y,selectFirstOptionOnDropdownOpen:T,onOptionSubmit:w,comboboxProps:S,readOnly:k,disabled:C,filter:O,limit:R,withScrollArea:B,maxDropdownHeight:z,floatingHeight:D,size:I,searchable:_,rightSection:E,checkIconPosition:F,withCheckIcon:M,withAlignedLabels:$,nothingFoundMessage:A,name:V,form:L,searchValue:W,defaultSearchValue:q,onSearchChange:G,allowDeselect:H,error:K,rightSectionPointerEvents:U,id:Y,clearable:X,clearSectionMode:Z,clearButtonProps:J,hiddenInputProps:Q,renderOption:ee,onClear:et,autoComplete:eo,scrollAreaProps:en,__defaultRightSection:er,__clearSection:ei,__clearable:ea,chevronColor:es,autoSelectOnBlur:el,openOnFocus:ed,attributes:ec,...eu}=n,ep=(0,v.useMemo)(()=>oV(x),[x]),eh=(0,v.useRef)({}),ef=(0,v.useMemo)(()=>(function e(t){return t.reduce((t,o)=>"group"in o?{...t,...e(o.items)}:(t[`${o.value}`]=o,t),{})})(ep),[ep]),em=(0,N.f)(Y),eg=function({id:e,label:t,labelProps:o,inputWrapperOrder:n}){if(t&&(!n||n.includes("label")))return o?.id||`${e}-label`}({id:em,label:eu.label,labelProps:eu.labelProps,inputWrapperOrder:eu.inputWrapperOrder}),[ex,eb,ev]=(0,P.f)({value:b,defaultValue:j,finalValue:null,onChange:g}),ej=null!=ex?`${ex}`in ef?ef[`${ex}`]:eh.current[`${ex}`]:void 0,ey=(o=(0,v.useRef)(void 0),(0,v.useEffect)(()=>{o.current=ej},[ej]),o.current),[eT,ew,eS]=(0,P.f)({value:W,defaultValue:q,finalValue:ej?ej.label:"",onChange:G}),ek=rj({opened:l,defaultOpened:c,onDropdownOpen:()=>{p?.(),T?ek.selectFirstOption():ek.updateSelectedOptionIndex("active",{scrollIntoView:!0})},onDropdownClose:()=>{u?.(),setTimeout(ek.resetSelectedOption,0)}}),eC=e=>{ew(e),ek.resetSelectedOption()},{resolvedClassNames:eO,resolvedStyles:eN}=(0,eR.f)({props:n,styles:i,classNames:r});(0,v.useEffect)(()=>{y&&ek.selectFirstOption()},[y,eT]),(0,v.useEffect)(()=>{null===b&&eC(""),null!=b&&ej&&(ey?.value!==ej.value||ey?.label!==ej.label)&&eC(ej.label)},[b,ej]),(0,v.useEffect)(()=>{ev||eS||eC(null!=ex?`${ex}`in ef?ef[`${ex}`]?.label:eh.current[`${ex}`]?.label||"":"")},[ef,ex]),(0,v.useEffect)(()=>{ex&&`${ex}`in ef&&(eh.current[`${ex}`]=ef[`${ex}`])},[ef,ex]);let eP=(0,t.jsx)(rH.ClearButton,{...J,onClear:()=>{eb(null,null),eC(""),et?.()}}),eB=X&&null!=ex&&!C&&!k;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(rH,{store:ek,__staticSelector:"Select",classNames:eO,styles:eN,unstyled:a,readOnly:k,size:I,attributes:ec,floatingHeight:D,keepMounted:el,onOptionSubmit:e=>{w?.(e);let t=H&&`${ef[e].value}`==`${ex}`?null:ef[e],o=t?t.value:null;o!==ex&&eb(o,t),ev||eC(null!=o&&t?.label||""),ek.closeDropdown()},...S,children:[(0,t.jsx)(rH.Target,{targetType:_?"input":"button",autoComplete:eo,withExpandedAttribute:!0,children:(0,t.jsx)(e1,{id:em,__defaultRightSection:(0,t.jsx)(rH.Chevron,{size:I,error:K,unstyled:a,color:es}),__clearSection:eP,__clearable:eB,__clearSectionMode:Z,rightSection:E,rightSectionPointerEvents:U||"none",...eu,size:I,__staticSelector:"Select",disabled:C,readOnly:k||!_,value:eT,onChange:e=>{let t;if(rv(t=e.currentTarget).activeElement!==t){if(!k){let t=function(e,t){let o=t.trim().toLowerCase();if(""===o)return;let n=Object.values(e).filter(e=>!e.disabled&&e.label.trim().toLowerCase()===o);return 1===n.length?n[0]:void 0}(ef,e.currentTarget.value);t&&`${t.value}`!=`${ex}`&&(eb(t.value,t),ev||eC(t.label))}return}eC(e.currentTarget.value),ek.openDropdown(),y&&ek.selectFirstOption()},onFocus:e=>{ed&&_&&ek.openDropdown(),h?.(e)},onBlur:e=>{el&&ek.clickSelectedOption(),ek.closeDropdown();let t=null!=ex&&(`${ex}`in ef?ef[`${ex}`]:eh.current[`${ex}`]);eC(t&&t.label||""),f?.(e)},onClick:e=>{_?ek.openDropdown():ek.toggleDropdown(),m?.(e)},classNames:eO,styles:eN,unstyled:a,pointer:!_,error:K,attributes:ec})}),(0,t.jsx)(rY,{data:ep,hidden:k||C,filter:O,search:eT,limit:R,hiddenWhenEmpty:!A,withScrollArea:B,maxDropdownHeight:z,filterOptions:!!_&&ej?.label!==eT,value:ex,checkIconPosition:F,withCheckIcon:M,withAlignedLabels:$,nothingFoundMessage:A,unstyled:a,labelId:eg,"aria-label":eg?void 0:eu["aria-label"],renderOption:ee,scrollAreaProps:en})]}),(0,t.jsx)(rH.HiddenInput,{value:ex,name:V,form:L,disabled:C,...Q})]})});rZ.classes={...e1.classes,...rH.classes},rZ.displayName="@mantine/core/Select";let rJ={type:"code",component:function(){let[e,o]=(0,v.useState)("scale");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Group Example"}),(0,t.jsx)(oo.f,{justify:"left",children:(0,t.jsx)(rZ,{data:rg,value:e,onChange:o,label:"Focused mode"})}),(0,t.jsx)(ro.f,{children:(0,t.jsxs)(L.f,{children:["The ",(0,t.jsx)(ti,{children:"defaultFocused"})," props is set to ",(0,t.jsx)(ti,{children:"true"}),", card below is focused by default"]})}),(0,t.jsx)(rn.f,{mb:600,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.f,{fz:48,children:"👇"}),(0,t.jsx)(L.f,{children:"Scroll down"})]})})]}),(0,t.jsx)(rt.f.FocusReveal.Group,{focusedMode:e,children:(0,t.jsxs)(rr.f,{children:[(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{children:(0,t.jsx)(ra.g,{testimonial:0})})}),(0,t.jsx)(rn.f,{my:100}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{defaultFocused:!1,children:(0,t.jsx)(ra.g,{testimonial:1})})}),(0,t.jsx)(rn.f,{my:100}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{children:(0,t.jsx)(ra.g,{testimonial:2})})}),(0,t.jsx)(rn.f,{my:100})]})})]})},code:`
import { useState } from 'react';
import { FocusRevealFocusedMode, focusRevealModes } from '@gfazioli/mantine-focus-reveal';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Group, Select, Stack, Text, Title } from '@mantine/core';

function Demo() {
  const [focusedMode, setFocusedMode] = useState<string | null>('scale');

  return (
    <>
      <Stack justify="center" align="center">
        <Title order={4}>Group Example</Title>

        <Group justify="left">
          <Select
            data={[
              'border',
              'elastic',
              'glow',
              'glow-blue',
              'glow-green',
              'glow-red',
              'none',
              'pulse',
              'rotate',
              'scale',
              'shake',
              'zoom',
            ]}
            value={focusedMode}
            onChange={setFocusedMode}
            label="Focused mode"
          />
        </Group>

        <Center>
          <Text>
            The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
            by default
          </Text>
        </Center>

        <Divider
          mb={600}
          label={
            <>
              <Text fz={48}>👇</Text>
              <Text>Scroll down</Text>
            </>
          }
        />
      </Stack>

      <OnboardingTour.FocusReveal.Group focusedMode={focusedMode as FocusRevealFocusedMode}>
        <Stack>
          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={0} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal defaultFocused={false}>
              <Testimonials testimonial={1} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />

          <Center>
            <OnboardingTour.FocusReveal>
              <Testimonials testimonial={2} />
            </OnboardingTour.FocusReveal>
          </Center>

          <Divider my={100} />
        </Stack>
      </OnboardingTour.FocusReveal.Group>
    </>
  );
}  
`,defaultExpanded:!1},rQ={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Overlay Example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Set the Focus to the below component"})}),(0,t.jsx)(rn.f,{my:200}),(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,overlayProps:{color:"rgba(255,0,0,1)",blur:0},children:(0,t.jsx)(ra.g,{testimonial:1})})}),(0,t.jsx)(rn.f,{my:200})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Overlay Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={200} />

      <Group justify="center">
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          overlayProps={{
            color: 'rgba(255,0,0,1)',
            blur: 0,
          }}
        >
          <Testimonials testimonial={1} />
        </OnboardingTour.FocusReveal>
      </Group>

      <Divider my={200} />
    </Stack>
  );
}
`,defaultExpanded:!1},r0={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1),r=(0,v.useRef)(null);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Paper container Example"}),(0,t.jsxs)(rc.f,{shadow:"sm",withBorder:!0,radius:16,p:16,ref:r,h:500,style:{overflow:"auto"},children:[(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Reveal the Bottom Card"})}),(0,t.jsx)(rn.f,{my:400,label:"Divider"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{scrollableRef:r,focused:e,onBlur:o,children:(0,t.jsx)(ra.g,{testimonial:0})})})]})]})},code:`
import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Paper, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Paper container Example</Title>

      <Paper
        shadow="sm"
        withBorder
        radius={16}
        p={16}
        ref={scrollRef}
        h={500}
        style={{ overflow: 'auto' }}
      >
        <Center>
          <Button onClick={open}>Reveal the Bottom Card</Button>
        </Center>

        <Divider my={400} label="Divider" />

        <Center>
          <OnboardingTour.FocusReveal
            scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
            focused={focused}
            onBlur={close}
          >
            <Testimonials testimonial={0} />
          </OnboardingTour.FocusReveal>
        </Center>
      </Paper>
    </Stack>
  );
}
`,defaultExpanded:!1},r1={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Popover example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Reveal the Bottom Card"})}),(0,t.jsx)(rn.f,{my:200,label:"Divider"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,popoverContent:(0,t.jsx)("h1",{children:"Hello, World!"}),children:(0,t.jsx)(ra.g,{testimonial:0})})})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal focused={focused} onBlur={close} popoverContent={<h1>Hello, World!</h1>}>
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}
`,defaultExpanded:!1},r2={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Popover example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Reveal the Bottom Card"})}),(0,t.jsx)(rn.f,{my:200,label:"Divider"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,popoverContent:(0,t.jsx)("h1",{children:"Hello, World!"}),popoverProps:{position:"top",withArrow:!1,shadow:"md",radius:256},children:(0,t.jsx)(ra.g,{testimonial:0})})})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={<h1>Hello, World!</h1>}
          popoverProps={{
            position: 'top',
            withArrow: false,
            shadow: 'md',
            radius: 256,
          }}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}
`,defaultExpanded:!1},r3={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Popover width example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Reveal the Bottom Card"})}),(0,t.jsx)(rn.f,{my:200,label:"Divider"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,popoverContent:(0,t.jsxs)(rr.f,{gap:"xs",children:[(0,t.jsx)(e3.f,{order:5,children:"A step with a lot of content"}),(0,t.jsx)(L.f,{size:"sm",children:"Without a width ceiling the dropdown grows to fit its content on a single line (width: max-content), so wide or non-wrapping content overflows the viewport. The default max-width of 400px keeps the popover readable and on-screen."})]}),popoverProps:{position:"top"},children:(0,t.jsx)(ra.g,{testimonial:0})})})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Popover width example</Title>

      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={200} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          popoverContent={
            <Stack gap="xs">
              <Title order={5}>A step with a lot of content</Title>
              <Text size="sm">
                Without a width ceiling the dropdown grows to fit its content on a single line
                (width: max-content), so wide or non-wrapping content overflows the viewport. The
                default max-width of 400px keeps the popover readable and on-screen.
              </Text>
            </Stack>
          }
          popoverProps={{
            position: 'top',
            // Default max-width is 400px. Uncomment to change it (use 'none' to remove the cap):
            // styles: { dropdown: { maxWidth: 560 } },
          }}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </Stack>
  );
}
`,defaultExpanded:!1},r4={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1);return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Custom Reveal Props Example"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Set the Focus to the below component"})}),(0,t.jsx)(rn.f,{my:200}),(0,t.jsx)(oo.f,{justify:"center",children:(0,t.jsx)(rt.f.FocusReveal,{focused:e,onBlur:o,revealProps:{duration:500},children:(0,t.jsx)(ra.g,{testimonial:1})})}),(0,t.jsx)(rn.f,{my:200})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, Group, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Custom Reveal Props Example</Title>

      <Center>
        <Button onClick={open}>Set the Focus to the below component</Button>
      </Center>

      <Divider my={200} />

      <Group justify="center">
        <OnboardingTour.FocusReveal
          focused={focused}
          onBlur={close}
          revealProps={{
            duration: 500,
          }}
        >
          <Testimonials testimonial={1} />
        </OnboardingTour.FocusReveal>
      </Group>

      <Divider my={200} />
    </Stack>
  );
}
`,defaultExpanded:!1},r5={type:"code",component:function(){let[e,{close:o,open:n}]=(0,ri.f)(!1),r=(0,v.useRef)(null);return(0,t.jsxs)(ep.f,{viewportRef:r,h:500,style:{position:"relative"},children:[(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{onClick:n,children:"Reveal the Bottom Card"})}),(0,t.jsx)(rn.f,{my:400,label:"Divider"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{scrollableRef:r,focused:e,onBlur:o,children:(0,t.jsx)(ra.g,{testimonial:0})})})]})},code:`
import { useRef } from 'react';
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Divider, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [focused, { close, open }] = useDisclosure(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollArea viewportRef={scrollRef} h={500} style={{ position: 'relative' }}>
      <Center>
        <Button onClick={open}>Reveal the Bottom Card</Button>
      </Center>

      <Divider my={400} label="Divider" />

      <Center>
        <OnboardingTour.FocusReveal
          scrollableRef={scrollRef as React.RefObject<HTMLDivElement>}
          focused={focused}
          onBlur={close}
        >
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>
    </ScrollArea>
  );
}
`,defaultExpanded:!1},r9={type:"code",component:function(){return(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(e3.f,{order:4,children:"Simple (uncontrolled) Example"}),(0,t.jsx)(ro.f,{children:(0,t.jsxs)(L.f,{children:["The ",(0,t.jsx)(ti,{children:"defaultFocused"})," props is set to ",(0,t.jsx)(ti,{children:"true"}),", card below is focused by default"]})}),(0,t.jsx)(rn.f,{mb:600,label:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.f,{fz:48,children:"👇"}),(0,t.jsx)(L.f,{children:"Scroll down"})]})}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(rt.f.FocusReveal,{defaultFocused:!0,withReveal:!1,children:(0,t.jsx)(ra.g,{testimonial:0})})}),(0,t.jsx)(rn.f,{my:200})]})},code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Center, Code, Divider, Stack, Text, Title } from '@mantine/core';

function Demo() {

  return (
    <Stack justify="center" align="center">
      <Title order={4}>Simple (uncontrolled) Example</Title>

      <Center>
        <Text>
          The <Code>defaultFocused</Code> props is set to <Code>true</Code>, card below is focused
          by default
        </Text>
      </Center>

      <Divider mb={600}
        label={
          <>
            <Text fz={48}>👇</Text>
            <Text>Scroll down</Text>
          </>
        }
      />

      <Center>
        <OnboardingTour.FocusReveal defaultFocused={true} withReveal={false}>
          <Testimonials testimonial={0} />
        </OnboardingTour.FocusReveal>
      </Center>

      <Divider my={200} />
    </Stack>
  );
}
`,defaultExpanded:!1};var r6=e.i(66992);let r8=(0,_.f)("outline","bell","Bell",[["path",{d:"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6",key:"svg-0"}],["path",{d:"M9 17v1a3 3 0 0 0 6 0v-1",key:"svg-1"}]]),r7=(0,_.f)("outline","settings","Settings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]]),ie={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1);return(0,t.jsx)(rt.f,{tour:[{id:"welcome",title:"Welcome aboard 👋",content:"No element has this id, so the step is shown in the middle of the screen."},{id:"settings",title:"Settings",content:"Use the arrow keys to move between the steps, or Escape to leave the tour."},{id:"notifications",title:"Notifications",content:"Every step popover is a dialog named by its title."},{id:"done",title:"You are all set",content:"A centered step works well to close the tour, too."}],started:e,onOnboardingTourEnd:n,withStepCounter:!0,withStepper:!1,maw:320,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"Start the Tour"}),(0,t.jsxs)(oo.f,{justify:"center",gap:"xl",children:[(0,t.jsx)(r6.f,{"data-onboarding-tour-id":"settings",variant:"light",radius:"xl",size:"xl",children:(0,t.jsx)(r7,{size:24})}),(0,t.jsx)(r6.f,{"data-onboarding-tour-id":"notifications",variant:"light",size:"xl",children:(0,t.jsx)(r8,{size:24})})]}),(0,t.jsx)(L.f,{size:"sm",c:"dimmed",ta:"center",maw:320,children:"The first and the last step have no element on the page."})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import {
  OnboardingTour,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Button, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell, IconSettings } from '@tabler/icons-react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      // No element has this id: the step is shown in the middle of the screen
      id: 'welcome',
      title: 'Welcome aboard 👋',
      content: 'No element has this id, so the step is shown in the middle of the screen.',
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'Use the arrow keys to move between the steps, or Escape to leave the tour.',
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'Every step popover is a dialog named by its title.',
    },
    {
      id: 'done',
      title: 'You are all set',
      content: 'A centered step works well to close the tour, too.',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      withStepCounter
      withStepper={false}
      maw={320}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Group justify="center" gap="xl">
          <ThemeIcon
            data-onboarding-tour-id="settings"
            variant="light"
            radius="xl"
            size="xl"
          >
            <IconSettings size={24} />
          </ThemeIcon>

          <ThemeIcon
            data-onboarding-tour-id="notifications"
            variant="light"
            size="xl"
          >
            <IconBell size={24} />
          </ThemeIcon>
        </Group>

        <Text size="sm" c="dimmed" ta="center" maw={320}>
          The first and the last step have no element on the page.
        </Text>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},it={type:"configurator",component:function(e){let[o,{open:n,close:r}]=(0,ri.f)(!1),i=[{id:"welcome",title:"Welcome to the Onboarding Tour Component",content:"This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users."},{id:"subtitle",title:"Subtitle",content:(0,t.jsxs)(L.f,{children:["You can select any component by using the ",(0,t.jsx)(ti,{children:"data-onboarding-tour-id"})," attribute"]})},{id:"button-see-all",title:"New Features",content:'Now you can click on the button "See all" to display all the testimonials'},{id:"testimonial-2",title:"New Testimonial Layout",content:"We have improved the Testimonial layout"}];return(0,t.jsx)(rt.f,{tour:i,started:o,onOnboardingTourEnd:r,onOnboardingTourSkip:r,maw:400,header:e=>(0,t.jsx)(ty.f,{mah:150,radius:"md",src:`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-${e.currentStepIndex||1}.png`}),...e,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:n,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsx)(e3.f,{"data-onboarding-tour-id":"welcome",order:4,children:"A simple example of the Onboarding Tour component"}),(0,t.jsx)(L.f,{"data-onboarding-tour-id":"subtitle",children:"👉 New amazing Mantine extension component"}),(0,t.jsx)(ro.f,{children:(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"button-see-all",children:"See all testimonials"})}),(0,t.jsxs)(oo.f,{justify:"center",children:[(0,t.jsx)(ra.g,{testimonial:0}),(0,t.jsx)(ra.g,{"data-onboarding-tour-id":"testimonial-2",testimonial:1})]})]})})},code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Center, Code, Divider, Group, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to the Onboarding Tour Component',
      content:
        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',
    },
    {
      id: 'subtitle',
      title: 'Subtitle',
      content: (
        <Text>
          You can select any component by using the <Code>data-onboarding-tour-id</Code> attribute
        </Text>
      ),
    },
    {
      id: 'button-see-all',
      title: 'New Features',
      content: 'Now you can click on the button "See all" to display all the testimonials',
    },
    {
      id: 'testimonial-2',
      title: 'New Testimonial Layout',
      content: 'We have improved the Testimonial layout',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={400}
      header={(tourController: OnboardingTourController) => (
        <Image
          mah={150}
          radius="md"
          src={\`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-$\{tourController.currentStepIndex + 1}.png\`}
        />
      )}
      {{props}}
    >
      <Stack justify="center" align="center">
        <Title data-onboarding-tour-id="welcome" order={4}>
          A simple example of the Onboarding Tour component
        </Title>
        <Text data-onboarding-tour-id="subtitle">👉 New amazing Mantine extension component</Text>

        <Center>
          <Button data-onboarding-tour-id="button-see-all">
            See all testimonials
          </Button>
        </Center>

        <Group justify="center">
          <Testimonials testimonial={0} />
          <Testimonials data-onboarding-tour-id="testimonial-2" testimonial={1} />
        </Group>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}],controls:[{prop:"withSkipButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withPrevButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withNextButton",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withStepper",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withStepCounter",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withKeyboardNavigation",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"closeOnEscape",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"closeOnOverlayClick",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"header",type:"string",initialValue:"",libraryValue:""},{prop:"footer",type:"string",initialValue:"",libraryValue:""},{prop:"nextStepNavigation",type:"string",initialValue:"Next",libraryValue:"Next"},{prop:"endStepNavigation",type:"string",initialValue:"Finish",libraryValue:"Finish"},{prop:"prevStepNavigation",type:"string",initialValue:"Previous",libraryValue:"Previous"},{prop:"skipNavigation",type:"string",initialValue:"Skip",libraryValue:"Skip"},{prop:"cutoutPadding",type:"number",initialValue:8,libraryValue:8,min:0,max:32,step:1},{prop:"cutoutRadius",type:"number",initialValue:8,libraryValue:8,min:0,max:9999,step:1}]};var io=e.i(88661);let ir={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1);return(0,t.jsx)(rt.f,{tour:[{id:"avatar",title:"Your Profile",content:"Click on your avatar to access profile settings.",cutoutPadding:4,cutoutRadius:9999},{id:"settings",title:"Settings",content:"This icon button uses a circular cutout too.",cutoutPadding:4,cutoutRadius:9999},{id:"notifications",title:"Notifications",content:"This step uses the default rectangular cutout."},{id:"action",title:"Get Started",content:"This button uses a pill-shaped cutout with a larger radius.",cutoutPadding:6,cutoutRadius:24}],started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,maw:350,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"Start the Tour"}),(0,t.jsx)(rn.f,{my:16,w:"100%"}),(0,t.jsxs)(oo.f,{justify:"center",gap:"xl",children:[(0,t.jsx)(io.f,{"data-onboarding-tour-id":"avatar",src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",radius:"xl",size:"lg"}),(0,t.jsx)(r6.f,{"data-onboarding-tour-id":"settings",variant:"light",radius:"xl",size:"xl",children:(0,t.jsx)(r7,{size:24})}),(0,t.jsx)(r6.f,{"data-onboarding-tour-id":"notifications",variant:"light",size:"xl",children:(0,t.jsx)(r8,{size:24})})]}),(0,t.jsxs)(L.f,{size:"sm",c:"dimmed",ta:"center",maw:300,children:["The avatar and settings icon use ",(0,t.jsx)("b",{children:"cutoutRadius: 9999"})," for a circular cutout. The notification icon uses the default rectangular cutout."]}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"action",radius:"xl",size:"md",children:"Get Started"})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import {
  OnboardingTour,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Avatar, Button, Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell, IconSettings } from '@tabler/icons-react';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'avatar',
      title: 'Your Profile',
      content: 'Click on your avatar to access profile settings.',
      // Circular cutout for round elements
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'settings',
      title: 'Settings',
      content: 'This icon button uses a circular cutout too.',
      cutoutPadding: 4,
      cutoutRadius: 9999,
    },
    {
      id: 'notifications',
      title: 'Notifications',
      content: 'This step uses the default rectangular cutout.',
      // Uses tour-level defaults (cutoutPadding: 8, cutoutRadius: 8)
    },
    {
      id: 'action',
      title: 'Get Started',
      content: 'This button uses a pill-shaped cutout with a larger radius.',
      cutoutPadding: 6,
      cutoutRadius: 24,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={350}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          Start the Tour
        </Button>

        <Divider my={16} w="100%" />

        <Group justify="center" gap="xl">
          <Avatar
            data-onboarding-tour-id="avatar"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            radius="xl"
            size="lg"
          />

          <ThemeIcon
            data-onboarding-tour-id="settings"
            variant="light"
            radius="xl"
            size="xl"
          >
            <IconSettings size={24} />
          </ThemeIcon>

          <ThemeIcon
            data-onboarding-tour-id="notifications"
            variant="light"
            size="xl"
          >
            <IconBell size={24} />
          </ThemeIcon>
        </Group>

        <Button data-onboarding-tour-id="action" radius="xl" size="md">
          Get Started
        </Button>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},ii={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1);return(0,t.jsx)(rt.f,{tour:[{id:"step-1",title:"Step-1",content:"Description of the Step 1",price:12},{id:"step-2",title:"Step-2",content:"Description of the Step 2"},{id:"step-3",title:"Step-3",content:"Description of the Step 3",price:32}],started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,footer:e=>e.currentStep?.price?(0,t.jsx)(ro.f,{children:(0,t.jsxs)(oo.f,{gap:4,children:[(0,t.jsx)(L.f,{size:"xs",children:"Price:"}),(0,t.jsxs)(nE.f,{color:"orange",children:["$",e.currentStep?.price]})]})}):(0,t.jsx)(oo.f,{grow:!0,children:(0,t.jsx)(nE.f,{color:"green",children:"Included in all plans"})}),maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Step 2"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Step 3"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep<{ price?: number }>[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Description of the Step 1',
      price: 12,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      price: 32,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      footer={(onboardingTour: OnboardingTourController) => {
        if (onboardingTour.currentStep?.price) {
          return (
            <Center>
              <Group gap={4}>
                <Text size="xs">Price:</Text>
                <Badge color="orange">$\{onboardingTour.currentStep?.price}</Badge>
              </Group>
            </Center>
          );
        }
        return (
          <Group grow>
            <Badge color="green">Included in all plans</Badge>
          </Group>
        );
      }}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]};var ia={root:"m_2ce0de02"};let is=(0,i.f)((e,{radius:t})=>({root:{"--bi-radius":void 0===t?void 0:(0,r.V)(t)}})),il=(0,V.f)(e=>{let o=(0,d.f)("BackgroundImage",null,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,radius:u,src:h,variant:f,attributes:m,...g}=o,x=(0,c.f)({name:"BackgroundImage",props:o,classes:ia,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:m,vars:l,varsResolver:is});return(0,t.jsx)(p.f,{variant:f,...x("root",{style:{backgroundImage:`url(${h})`}}),...g})});il.classes=ia,il.varsResolver=is,il.displayName="@mantine/core/BackgroundImage";var id=e.i(33573);let ic={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:"Step-1",content:"Description of the Step 1",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"},{id:"step-2",title:"Step-2",content:"Description of the Step 2",freeTrialBadge:(0,t.jsx)(ro.f,{children:(0,t.jsx)(nE.f,{color:"lime",children:"Free trial available"})}),image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png"},{id:"step-3",title:"Step-3",content:"Description of the Step 3",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"}];return(0,t.jsx)(rt.f,{tour:r,started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,title:()=>null,content:e=>{let{currentStepIndex:o,tour:n,nextStep:r,endTour:i}=e;if(void 0===o)return null;let{title:a,content:s,image:l,freeTrialBadge:d}=e.currentStep;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(il,{src:l,radius:"8px 8px 0 0",children:(0,t.jsx)(rr.f,{w:200,m:24,mb:24,children:(0,t.jsx)(e3.f,{c:"black",order:2,style:{textShadow:"1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white"},children:a})})}),(0,t.jsxs)(oo.f,{justify:"space-between",mx:16,children:[(0,t.jsx)(id.f,{count:n.length,value:o+1,onChange:t=>e.setCurrentStepIndex(t-1)}),(0,t.jsx)(ev.f,{size:"xs",onClick:i,children:"Skip"})]}),(0,t.jsxs)(rr.f,{mx:16,children:[(0,t.jsx)(oo.f,{justify:"right"}),(0,t.jsx)(L.f,{children:s}),(0,t.jsx)(n0.f,{size:"xs",onClick:r,children:"Next"})]}),d]})},withStepper:!1,withSkipButton:!1,withPrevButton:!1,withNextButton:!1,focusRevealProps:{popoverProps:{arrowSize:20,position:"right",styles:{dropdown:{padding:0}}}},maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",children:"Title"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",children:"Description"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",children:"Content"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

/** Your custom popover content */
import { customPopoverContent } from './customPopoverContent';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Description of the Step 1',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Description of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Description of the Step 3',
      image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    },
  ];  

  /** Since we are using the FocusReveal component, here we can interact and set all its props. */
  const focusRevealProps: FocusRevealProps = {
    popoverProps: {
      arrowSize: 20,
      position: 'right',
      styles: {
        dropdown: {
          padding: 0,
        },
      },
    },
  };

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      title={() => null}
      content={customPopoverContent}
      withStepper={false}
      withSkipButton={false}
      withPrevButton={false}
      withNextButton={false}
      focusRevealProps={focusRevealProps}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1">Title</Button>
          <Button data-onboarding-tour-id="step-2">Description</Button>
          <Button data-onboarding-tour-id="step-3">Content</Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"},{fileName:"customPopoverContent.tsx",code:`
import type {
  OnboardingTourController,
  OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import {
  Anchor,
  BackgroundImage,
  Button,
  Group,
  Rating,
  Stack,
  Text,
  Title,
} from '@mantine/core';

/**
 * You can use this function to customize the content of the popover.
 * As you can see you have the maximum access to the controller.
 */
export const customPopoverContent = (controller: OnboardingTourController) => {
  const { currentStepIndex, tour, nextStep } = controller;

  if (currentStepIndex === undefined) {
    return null;
  }

    const { title, content, image, freeTrialBadge } = controller.currentStep as OnboardingTourStep;

    return (
      <>
        <BackgroundImage src={image} radius="8px 8px 0 0">
          <Stack w={200} m={24} mb={24}>
            <Title
              c="black"
              order={2}
              style={{
                textShadow: '1px 0 0 white, 0 1px 0 white, -1px 0 0 white, 0 -1px 0 white',
              }}
            >
              {title as string}
            </Title>
          </Stack>
        </BackgroundImage>

        <Group justify="space-between" mx={16}>
          <Rating
            count={tour.length}
            value={currentStepIndex + 1}
            onChange={(value) => controller.setCurrentStepIndex(value - 1)}
          />
          <Anchor size="xs" onClick={endTour}>
            Skip
          </Anchor>
        </Group>
        <Stack mx={16}>
          <Group justify="right"></Group>
          <Text>{content as string}</Text>
          <Button size="xs" onClick={nextStep}>
            Next
          </Button>
        </Stack>
        {freeTrialBadge}
      </>
    );
};
}
`,language:"tsx"}]},iu={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:"Step-1",content:"Content of the Step 1"},{id:"step-2",title:"Step-2",content:"Content of the Step 2",freeTrialBadge:(0,t.jsx)(ro.f,{children:(0,t.jsx)(nE.f,{color:"lime",children:"Free trial available"})})},{id:"step-3",title:"Step-3",content:"Content of the Step 3"}];return(0,t.jsx)(rt.f,{tour:r,focusRevealProps:{popoverProps:{position:"top"}},started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,stepper:e=>(0,t.jsx)(ro.f,{children:(0,t.jsx)(id.f,{count:e.tour.length,value:(e.currentStepIndex??0)+1,onChange:t=>e.setCurrentStepIndex(t-1)})}),maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(oo.f,{children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Step 2"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Step 3"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { FocusRevealProps } from '@gfazioli/mantine-focus-reveal';
import {
  OnboardingTour,
  OnboardingTourController,
  type OnboardingTourStep,
} from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Center, Divider, Group, Rating, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const focusRevealProps: FocusRevealProps = {
    popoverProps: {
      position: 'top',
    },
  };

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Content of the Step 1',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Content of the Step 2',
      freeTrialBadge: (
        <Center>
          <Badge color="lime">Free trial available</Badge>
        </Center>
      ),
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  const customStepper = (tourController: OnboardingTourController) => (
    <Center>
      <Rating
        count={tourController.tour.length}
        value={(tourController.currentStepIndex ?? 0) + 1}
        onChange={(value) => tourController.setCurrentStepIndex(value - 1)}
      />
    </Center>
  );

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={focusRevealProps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      stepper={customStepper}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Group>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Group>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},ip={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:"Step-1",content:"Content of the Step 1"},{id:"step-2",title:"Step-2",content:"Content of the Step 2",myCustomInfo:(0,t.jsx)(nE.f,{children:"Free trial available"})},{id:"step-3",title:"Step-3",content:"Content of the Step 3"}];return(0,t.jsx)(rt.f,{tour:r,started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,title:"The Title for all steps",maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Step 2"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Step 3"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Content of the Step 1',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Content of the Step 2',
      myCustomInfo: <Badge>Free trial available</Badge>,
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      title="The Title for all steps"
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},ih=(0,v.createContext)(null),im={hiddenInputValuesSeparator:","},ig=(0,u.b)(e=>{let{value:o,defaultValue:n,onChange:r,size:i,wrapperProps:a,children:s,readOnly:l,name:c,hiddenInputValuesSeparator:u,hiddenInputProps:p,maxSelectedValues:h,disabled:f,...m}=(0,d.f)("CheckboxGroup",im,e),[g,x]=(0,P.f)({value:o,defaultValue:n,finalValue:[],onChange:r}),b=g.join(u);return(0,t.jsx)(ih,{value:{value:g,onChange:e=>{let t="string"==typeof e?e:e.currentTarget.value;if(l)return;let o=g.includes(t);!o&&h&&g.length>=h||x(o?g.filter(e=>e!==t):[...g,t])},size:i,isDisabled:e=>{if(f)return!0;if(!h)return!1;let t=g.includes(e),o=g.length>=h;return!t&&o}},children:(0,t.jsxs)(eQ.Wrapper,{size:i,...a,...m,labelElement:"div",__staticSelector:"CheckboxGroup",children:[(0,t.jsx)(t_,{role:"group",children:s}),(0,t.jsx)("input",{type:"hidden",name:c,value:b,...p})]})})});ig.classes=eQ.Wrapper.classes,ig.displayName="@mantine/core/CheckboxGroup";var ix={card:"m_26775b0a"};let ib=(0,v.createContext)(null),iv={withBorder:!0},ij=(0,i.f)((e,{radius:t})=>({card:{"--card-radius":(0,r.V)(t)}})),iy=(0,u.$)(e=>{let o=(0,d.f)("CheckboxCard",iv,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,checked:u,mod:p,withBorder:h,value:f,onClick:m,defaultChecked:g,onChange:x,indeterminate:b,attributes:j,...y}=o,T=(0,c.f)({name:"CheckboxCard",classes:ix,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:j,vars:l,varsResolver:ij,rootSelector:"card"}),w=(0,v.use)(ih),S="boolean"==typeof u?u:w?w.value.includes(f||""):void 0,[k,O]=(0,P.f)({value:S,defaultValue:g,finalValue:!1,onChange:x});return(0,t.jsx)(ib,{value:{checked:k,indeterminate:b},children:(0,t.jsx)(C.f,{mod:[{"with-border":h,checked:k,indeterminate:b},p],...T("card"),...y,role:"checkbox","aria-checked":b?"mixed":k,onClick:e=>{m?.(e),w?.onChange(f||""),O(!k)}})})});iy.displayName="@mantine/core/CheckboxCard",iy.classes=ix,iy.varsResolver=ij;var iT={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--light":"m_193e54c8","indicator--outline":"m_76e20374"};let iw={icon:ot.m,variant:"filled",radius:"sm"},iS=(0,i.f)((e,{radius:t,color:o,size:n,iconColor:i,variant:d,autoContrast:c})=>{let u=(0,W.f)({color:o||e.primaryColor,theme:e}),p=u.isThemeColor&&void 0===u.shade?`var(--mantine-color-${u.color}-outline)`:u.color,h="light"===d?e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:"light",autoContrast:c}):void 0,f="outline"===d?p:h?h.color:(0,a.f)(o,e);return{indicator:{"--checkbox-size":(0,r.K)(n,"checkbox-size"),"--checkbox-radius":void 0===t?void 0:(0,r.V)(t),"--checkbox-color":f,"--checkbox-bg":h?.background,"--checkbox-icon-color":i?(0,a.f)(i,e):h?h.color:(0,l.f)(c,e)?(0,s.p)({color:o,theme:e,autoContrast:c}):void 0}}}),ik=(0,u.$)(e=>{let o=(0,d.f)("CheckboxIndicator",iw,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,icon:u,indeterminate:h,radius:f,color:m,iconColor:g,autoContrast:x,checked:b,mod:j,variant:y,disabled:T,attributes:w,...S}=o,k=(0,c.f)({name:"CheckboxIndicator",classes:iT,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:w,vars:l,varsResolver:iS,rootSelector:"indicator"}),C=(0,v.use)(ib),O="boolean"==typeof h?h:C?.indeterminate,R="boolean"==typeof b||"boolean"==typeof h?b||h:C?.checked||C?.indeterminate||!1;return(0,t.jsx)(p.f,{...k("indicator",{variant:y}),variant:y,mod:[{checked:R,disabled:T},j],...S,children:(0,t.jsx)(u,{indeterminate:O,...k("icon")})})});ik.displayName="@mantine/core/CheckboxIndicator",ik.classes=iT,ik.varsResolver=iS;var iC={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--light":"m_595ab216","input--outline":"m_215c4542"};let iO={labelPosition:"right",icon:ot.m,withErrorStyles:!0,variant:"filled",radius:"sm"},iR=(0,i.f)((e,{radius:t,color:o,size:n,iconColor:i,variant:d,autoContrast:c})=>{let u=(0,W.f)({color:o||e.primaryColor,theme:e}),p=u.isThemeColor&&void 0===u.shade?`var(--mantine-color-${u.color}-outline)`:u.color,h="light"===d?e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:"light",autoContrast:c}):void 0,f="outline"===d?p:h?h.color:(0,a.f)(o,e);return{root:{"--checkbox-size":(0,r.K)(n,"checkbox-size"),"--checkbox-radius":void 0===t?void 0:(0,r.V)(t),"--checkbox-color":f,"--checkbox-bg":h?.background,"--checkbox-icon-color":i?(0,a.f)(i,e):h?h.color:(0,l.f)(c,e)?(0,s.p)({color:o,theme:e,autoContrast:c}):void 0}}}),iN=(0,u.$)(e=>{let o=(0,d.f)("Checkbox",iO,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,color:u,label:h,id:f,size:m,radius:g,wrapperProps:x,checked:b,labelPosition:j,description:y,error:T,disabled:w,variant:S,indeterminate:k,icon:C,rootRef:O,iconColor:R,onChange:P,autoContrast:B,mod:z,attributes:D,readOnly:I,onClick:_,withErrorStyles:E,ref:F,...M}=o,$=(0,v.useRef)(null),A=(0,v.use)(ih),V=m||A?.size,L=(0,c.f)({name:"Checkbox",props:o,classes:iC,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:D,vars:l,varsResolver:iR}),{styleProps:W,rest:q}=(0,ek.f)(M),G=(0,N.f)(f),H=[y?`${G}-description`:void 0,T&&"boolean"!=typeof T?`${G}-error`:void 0,q["aria-describedby"]].filter(Boolean).join(" ")||void 0,K={checked:A?.value.includes(q.value)??b,onChange:e=>{I||(A?.onChange(e),P?.(e))}},U=A?.isDisabled?.(q.value)??!1,Y=w||U;return(0,v.useEffect)(()=>{$.current&&($.current.indeterminate=k||!1,k?$.current.setAttribute("data-indeterminate","true"):$.current.removeAttribute("data-indeterminate"))},[k]),(0,t.jsx)(tI,{...L("root"),__staticSelector:"Checkbox",__stylesApiProps:o,id:G,size:V,labelPosition:j,label:h,description:y,error:T,disabled:Y,classNames:n,styles:a,unstyled:s,"data-checked":K.checked||b||void 0,variant:S,ref:O,mod:z,attributes:D,inert:q.inert,...W,...x,children:(0,t.jsxs)(p.f,{...L("inner"),mod:{labelPosition:j},children:[(0,t.jsx)(p.f,{component:"input",id:G,ref:(0,tX.L)($,F),mod:{error:!!T,"with-error-styles":E},...L("input",{focusable:!0,variant:S}),...q,...K,"aria-describedby":H,disabled:Y,inert:q.inert,type:"checkbox",onClick:e=>{I&&void 0===K.checked&&e.preventDefault(),_?.(e)}}),(0,t.jsx)(C,{indeterminate:k,...L("icon")})]})})});iN.classes={...iC,...tD},iN.varsResolver=iR,iN.displayName="@mantine/core/Checkbox",iN.Group=ig,iN.Indicator=ik,iN.Card=iy;var iP={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let iB={visibilityToggleIcon:function({reveal:e}){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:e?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,t.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"}),(0,t.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,t.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"}),(0,t.jsx)("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})})},visibilityToggleFocusable:!1,size:"sm"},iz=(0,i.f)((e,{size:t})=>({root:{"--psi-icon-size":(0,r.K)(t,"psi-icon-size"),"--psi-button-size":(0,r.K)(t,"psi-button-size")}}));function iD(e){let o=(0,v.use)(eE);return(0,t.jsx)("input",{...e,"aria-describedby":o?.describedBy})}let iI=(0,u.$)(e=>{let o=(0,d.f)(["Input","InputWrapper","PasswordInput"],iB,e),{classNames:n,className:r,style:i,styles:a,unstyled:s,vars:l,required:u,error:p,success:h,leftSection:f,disabled:m,id:g,variant:x,inputContainer:b,description:v,label:j,size:y,errorProps:T,successProps:w,descriptionProps:S,labelProps:k,withAsterisk:C,inputWrapperOrder:O,wrapperProps:R,radius:B,rightSection:z,rightSectionWidth:D,rightSectionPointerEvents:I,leftSectionWidth:_,visible:E,defaultVisible:F,onVisibilityChange:M,visibilityToggleIcon:$,visibilityToggleButtonProps:A,visibilityToggleFocusable:V,rightSectionProps:L,leftSectionProps:W,leftSectionPointerEvents:q,withErrorStyles:G,withSuccessStyles:H,mod:K,attributes:U,dir:Y,...X}=o,Z=(0,N.f)(g),[J,Q]=(0,P.f)({value:E,defaultValue:F,finalValue:!1,onChange:M}),ee=(0,c.f)({name:"PasswordInput",classes:iP,props:o,className:r,style:i,classNames:n,styles:a,unstyled:s,attributes:U,vars:l,varsResolver:iz}),{resolvedClassNames:et,resolvedStyles:eo}=(0,eR.f)({classNames:n,styles:a,props:o}),{styleProps:en,rest:er}=(0,ek.f)(X),ei=T?.id||`${Z}-error`,ea=w?.id||`${Z}-success`,es=S?.id||`${Z}-description`,el=(0,t.jsx)(td.f,{...ee("visibilityToggle"),disabled:m,radius:B,"aria-pressed":J,tabIndex:V?0:-1,"aria-label":"Toggle password visibility",...A,variant:A?.variant??"subtle",color:"gray",unstyled:s,onTouchEnd:e=>{e.preventDefault(),A?.onTouchEnd?.(e),Q(!J)},onMouseDown:e=>{e.preventDefault(),A?.onMouseDown?.(e),Q(!J)},onKeyDown:e=>{A?.onKeyDown?.(e),(" "===e.key||"Enter"===e.key)&&(e.preventDefault(),Q(!J))},children:(0,t.jsx)($,{reveal:J})});return(0,t.jsx)(eQ.Wrapper,{required:u,id:Z,label:j,error:p,success:h,description:v,size:y,classNames:et,styles:eo,__staticSelector:"PasswordInput",__stylesApiProps:o,unstyled:s,withAsterisk:C,inputWrapperOrder:O,inputContainer:b,variant:x,labelProps:{...k,htmlFor:Z},descriptionProps:{...S,id:es},errorProps:{...T,id:ei},successProps:{...w,id:ea},mod:K,attributes:U,...ee("root"),...en,...R,children:(0,t.jsx)(eQ,{component:"div",dir:Y,error:p,success:h,leftSection:f,size:y,classNames:{...et,input:(0,ey.f)(iP.input,et?.input)},styles:eo,radius:B,disabled:m,__staticSelector:"PasswordInput",__stylesApiProps:o,rightSectionWidth:D,rightSection:z??el,variant:x,unstyled:s,leftSectionWidth:_,rightSectionPointerEvents:I||"all",rightSectionProps:L,leftSectionProps:W,leftSectionPointerEvents:q,withAria:!1,withErrorStyles:G,withSuccessStyles:H,attributes:U,children:(0,t.jsx)(iD,{required:u,"data-invalid":!!p||void 0,"data-with-left-section":!!f||void 0,...ee("innerInput"),disabled:m,id:Z,dir:Y,...er,autoComplete:er.autoComplete||"off",type:J?"text":"password"})})})});iI.classes={...e1.classes,...iP},iI.varsResolver=iz,iI.displayName="@mantine/core/PasswordInput";let i_=()=>(0,t.jsxs)(rc.f,{withBorder:!0,shadow:"md",p:30,radius:"md",children:[(0,t.jsx)(e2,{label:"Email",placeholder:"you@mantine.dev",required:!0}),(0,t.jsx)(iI,{label:"Password",placeholder:"Your password",required:!0,mt:"md"}),(0,t.jsxs)(oo.f,{justify:"space-between",mt:"lg",children:[(0,t.jsx)(iN,{label:"Remember me"}),(0,t.jsx)(ev.f,{component:"button",size:"sm",children:"Forgot password?"})]}),(0,t.jsx)(n0.f,{fullWidth:!0,mt:"xl",children:"Sign in"})]}),iE={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:(0,t.jsxs)(e3.f,{order:4,c:"lime",children:["Title in a ",(0,t.jsx)(ti,{children:"Title"})," component"]}),content:(0,t.jsxs)(L.f,{c:"red",children:["Content in a ",(0,t.jsx)(ti,{children:"Text"})," component with color red"]})},{id:"step-2",title:"Simple Title String",content:e=>(0,t.jsxs)(L.f,{children:["Content by using the function ",(0,t.jsx)(ti,{children:"(tourController: OnboardingTourController)"})," so we can get some more information such as the step: ",e.currentStepIndex]})},{id:"step-3",content:(0,t.jsx)(i_,{})}];return(0,t.jsx)(rt.f,{tour:r,started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Title"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Description"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Content"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: (
        <Title order={4} c="lime">
          Title in a <Code>Title</Code> component
        </Title>
      ),
      content: (
        <Text c="red">
          Description in a <Code>Text</Code> component with color red
        </Text>
      ),
    },
    {
      id: 'step-2',
      title: 'Simple Title String',
      content: (tourController: OnboardingTourController) => (
        <Text>
          Description by using the function <Code>(tourController: OnboardingTourController)</Code> so we can get some more information such as the step: {tourController.currentStepIndex}
        </Text>
      ),
    },
    {
      id: 'step-3',
      content: <LoginForm />,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Title
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Description
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Content
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},iF={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1);return(0,t.jsx)(rt.f,{tour:[{id:"step-1",title:"Step 1 Title",content:"Content for step 1",focusRevealProps:{popoverProps:{position:"top"}}},{id:"step-2",title:"Step 2 Title",content:"Content for step 2",focusRevealProps:e=>({overlayProps:{color:"#f00"},popoverProps:{position:"left-end"}})},{id:"step-3",title:"Step 3 Title",content:"Content for step 3",focusRevealProps:{popoverProps:{position:"right",shadow:"0 0 16px 8px rgba(0, 0, 255, 1)"}}}],started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Title"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Description"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Content"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step 1 Title',
      content: 'Content for step 1',
      focusRevealProps: {
        popoverProps: {
          position: 'top',
        },
      },
    },
    {
      id: 'step-2',
      title: 'Step 2 Title',
      content: 'Content for step 2',
      focusRevealProps: (tourController: OnboardingTourController) => {
        return {
          overlayProps: {
            color: '#f00',
          },
          popoverProps: {
            position: 'bottom',
          },
        };
      },
    },
    {
      id: 'step-3',
      title: 'Step 3 Title',
      content: 'Content for step 3',
      focusRevealProps: {
        popoverProps: {
          position: 'top',
          shadow: '0 0 16px 8px rgba(0, 0, 255, 1)',
        },
      },
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Title
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Description
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Content
          </Button>
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]};function iM({open:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(rt.f.Target,{id:"step-2",children:(0,t.jsx)(n0.f,{onClick:e,children:"Step 2"})}),(0,t.jsx)(rt.f.Target,{id:"step-3",children:(0,t.jsx)(n0.f,{onClick:e,children:"Step 3"})})]})}let i$={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:"Step-1",content:(0,t.jsx)(nE.f,{color:"lime",children:"I'm a direct child of OnboardingTour"})},{id:"step-2",title:"Step-2",content:(0,t.jsx)(nE.f,{color:"yellow",children:"I'm not a direct child of OnboardingTour"})},{id:"step-3",title:"Step-3",content:(0,t.jsx)(nE.f,{color:"yellow",children:"I'm not a direct child of OnboardingTour"})}];return(0,t.jsx)(rt.f,{tour:r,started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,title:"The Title for all steps",withSkipButton:!1,maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(iM,{open:o})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function AnotherComponent({ open }: { open: () => void }) {
  return (
    <>
      <OnboardingTour.Target id="step-2">
        <Button onClick={open}>Step 2</Button>
      </OnboardingTour.Target>
      <OnboardingTour.Target id="step-3">
        <Button onClick={open}>Step 3</Button>
      </OnboardingTour.Target>
    </>
  );
}

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: <Badge color="lime">I'm a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      title="The Title for all steps"
      withSkipButton={false}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />
        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <AnotherComponent open={open} />
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]};function iA({open:e}){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(rt.f.Target,{id:"step-2",focusRevealProps:{popoverProps:{position:"top-end"}},children:(0,t.jsx)(n0.f,{onClick:e,children:"Step 2"})}),(0,t.jsx)(rt.f.Target,{id:"step-3",focusRevealProps:e=>({popoverProps:{position:"right-end"},overlayProps:{blur:16}}),children:(0,t.jsx)(n0.f,{onClick:e,children:"Step 3"})})]})}let iV={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1),r=[{id:"step-1",title:"Step-1",content:(0,t.jsx)(nE.f,{color:"lime",children:"I'm a direct child of OnboardingTour"})},{id:"step-2",title:"Step-2",content:(0,t.jsx)(nE.f,{color:"yellow",children:"I'm not a direct child of OnboardingTour"})},{id:"step-3",title:"Step-3",content:(0,t.jsx)(nE.f,{color:"yellow",children:"I'm not a direct child of OnboardingTour"})}];return(0,t.jsx)(rt.f,{tour:r,started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,title:"The Title for all steps",withSkipButton:!1,maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(rr.f,{w:200,gap:32,children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(iA,{open:o})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour, type OnboardingTourStep } from '@gfazioli/mantine-onboarding-tour';
import { Badge, Button, Divider, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function AnotherComponent({ open }: { open: () => void }) {
  return (
    <>
      <OnboardingTour.Target
        id="step-2"
        focusRevealProps={{ popoverProps: { position: 'top-end' } }}
      >
        <Button onClick={open}>Step 2</Button>
      </OnboardingTour.Target>
      <OnboardingTour.Target
        id="step-3"
        focusRevealProps={{ popoverProps: { position: 'right-end' }, overlayProps: { blur: 16 } }}
      >
        <Button onClick={open}>Step 3</Button>
      </OnboardingTour.Target>
    </>
  );
}

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: <Badge color="lime">I'm a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: <Badge color="yellow">I'm not a direct child of OnboardingTour</Badge>,
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      title="The Title for all steps"
      withSkipButton={false}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />
        <Stack w={200} gap={32}>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <AnotherComponent open={open} />
        </Stack>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},iL={type:"code",component:function(){let[e,{open:o,close:n}]=(0,ri.f)(!1);return(0,t.jsx)(rt.f,{tour:[{id:"step-1",title:"Step-1",content:"Content of the Step 1"},{id:"step-2",title:"Step-2",content:"Content of the Step 2"},{id:"step-3",title:"Step-3",content:"Content of the Step 3"}],focusRevealProps:{popoverProps:{position:"top"}},started:e,onOnboardingTourEnd:n,onOnboardingTourSkip:n,title:e=>(0,t.jsx)(e3.f,{c:"blue",order:4,children:e.currentStep?.title}),content:e=>(0,t.jsx)(L.f,{c:"lime",size:"lg",children:e.currentStep?.content}),maw:400,children:(0,t.jsxs)(rr.f,{justify:"center",align:"center",children:[(0,t.jsx)(n0.f,{size:"md",radius:256,variant:"gradient",onClick:o,children:"👉 Click here to Start the Tour 👈"}),(0,t.jsx)(rn.f,{my:32}),(0,t.jsxs)(oo.f,{children:[(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-1",onClick:o,children:"Step 1"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-2",onClick:o,children:"Step 2"}),(0,t.jsx)(n0.f,{"data-onboarding-tour-id":"step-3",onClick:o,children:"Step 3"})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { OnboardingTour } from '@gfazioli/mantine-onboarding-tour';
import { Button, Code, Divider, Stack, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [started, { open, close }] = useDisclosure(false);

  const onboardingSteps: OnboardingTourStep[] = [
    {
      id: 'step-1',
      title: 'Step-1',
      content: 'Content of the Step 1',
    },
    {
      id: 'step-2',
      title: 'Step-2',
      content: 'Content of the Step 2',
    },
    {
      id: 'step-3',
      title: 'Step-3',
      content: 'Content of the Step 3',
    },
  ];

  return (
    <OnboardingTour
      tour={onboardingSteps}
      focusRevealProps={{
        popoverProps: {
          position: 'top',
        },
      }}
      started={started}
      onOnboardingTourEnd={close}
      onOnboardingTourSkip={close}
      title={(tourController: OnboardingTourController) => (
        <Title c="blue" order={4}>
          {tourController.currentStep?.title as string}
        </Title>
      )}
      content={(tourController: OnboardingTourController) => (
        <Text c="lime" size="lg">
          {tourController.currentStep?.content as string}
        </Text>
      )}
      maw={400}
    >
      <Stack justify="center" align="center">
        <Button size="md" radius={256} variant="gradient" onClick={open}>
          👉 Click here to Start the Tour 👈
        </Button>

        <Divider my={32} />

        <Group>
          <Button data-onboarding-tour-id="step-1" onClick={open}>
            Step 1
          </Button>
          <Button data-onboarding-tour-id="step-2" onClick={open}>
            Step 2
          </Button>
          <Button data-onboarding-tour-id="step-3" onClick={open}>
            Step 3
          </Button>
        </Group>
      </Stack>
    </OnboardingTour>
  );
}
`,language:"tsx"}]},iW=()=>(0,t.jsx)(n8,{size:20,stroke:2.5,color:"var(--mantine-color-teal-6)","aria-label":"Supported"}),iq=()=>(0,t.jsx)(re,{size:18,stroke:2,color:"var(--mantine-color-red-6)","aria-label":"Not available"}),iG=({title:e,note:o})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.f,{size:"sm",fw:500,children:e}),o&&(0,t.jsx)(L.f,{size:"xs",c:"dimmed",children:o})]});function iH(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...nO(),...e.components},{Demo:n}=o;return n||iU("Demo",!0),eb||iU("Table",!1),eb.Tbody||iU("Table.Tbody",!0),eb.Td||iU("Table.Td",!0),eb.Th||iU("Table.Th",!0),eb.Thead||iU("Table.Thead",!0),eb.Tr||iU("Table.Tr",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Upgrading from an older major version?"})," See the ",(0,t.jsx)(o.a,{href:"/?t=migrations",children:"Upgrade guide"})," for breaking changes and step-by-step migration instructions."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n6,{packages:"@gfazioli/mantine-onboarding-tour"}),"\n",(0,t.jsx)(o.p,{children:"After installation import package styles at the root of your application:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@gfazioli/mantine-onboarding-tour/styles.css';\n"})}),"\n",(0,t.jsxs)(o.p,{children:["You can import styles within a layer ",(0,t.jsx)(o.code,{children:"@layer mantine-onboarding-tour"})," by importing ",(0,t.jsx)(o.code,{children:"@gfazioli/mantine-onboarding-tour/styles.layer.css"})," file."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import '@gfazioli/mantine-onboarding-tour/styles.layer.css';\n"})}),"\n",(0,t.jsx)(o.h2,{id:"comparison-with-mantine-core-tour",children:"Comparison with Mantine core Tour"}),"\n",(0,t.jsxs)(o.p,{children:["Since version 9.7, Mantine core ships a first-party ",(0,t.jsx)(o.a,{href:"https://mantine.dev/core/tour/",children:"Tour"})," component. The basics overlap — a spotlight overlay around each target, a step tooltip with Skip / Back / Next, keyboard navigation and focus management — but the two make different trade-offs."]}),"\n","\n","\n","\n",(0,t.jsxs)(eb,{striped:!0,withTableBorder:!0,withColumnBorders:!0,verticalSpacing:"sm",my:"md",children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{children:"Capability"}),(0,t.jsx)(eb.Th,{ta:"center",w:140,children:"OnboardingTour"}),(0,t.jsx)(eb.Th,{ta:"center",w:140,children:"Core Tour"})]})}),(0,t.jsxs)(eb.Tbody,{children:[(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Typed step data and render functions",note:"OnboardingTourStep<T> carries your own typed fields, and header, title, content and footer can be functions of the tour controller"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Focus effects on the target",note:"11 focusedMode effects — pulse, glow in four colors, border, shake, rotate, scale, elastic, zoom — or none"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Backdrop blur",note:"overlayProps.blur (2px by default) besides color and opacity — core sets overlayColor"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Built-in stepper",note:"Clickable step dots under the content (withStepper), or your own via stepper — core shows a text counter"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Responsive popover placement",note:"position, offset, width and arrowSize accept breakpoint maps, e.g. bottom on mobile and left from sm"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Loop mode",note:"loop wraps from the last step to the first and back"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Completion and skip told apart",note:"onOnboardingTourComplete and onOnboardingTourSkip, plus onOnboardingTourEnd for both — core reports onClose either way"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Standalone highlight",note:"OnboardingTour.FocusReveal and FocusReveal.Group highlight and reveal elements outside a tour"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Steps without a target",note:"Both show them in the middle of the screen, for a welcome or a closing step"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Keyboard navigation",note:"Both: ← / → between steps, mirrored in right-to-left layouts"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Close on Escape or overlay click",note:"Both: closeOnEscape (on by default) and closeOnOverlayClick (off by default)"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Accessible step dialog",note:"Both: a dialog named by the step title, focus moved in and given back at the end, step counter announced — core also traps the focus inside the tooltip while the overlay is shown"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Interactive target",note:"OnboardingTour leaves the highlighted element clickable (disableTargetInteraction blocks it) — core blocks it unless withOverlayInteraction"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Scroll the target into view",note:"OnboardingTour: eased scrolling inside any container (scrollableRef) that stops when the user scrolls — core: scrollIntoView when the target is not visible, or your scrollToHandler"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Spotlight padding and radius per step",note:"cutoutPadding / cutoutRadius here, spotlightPadding / spotlightRadius in core"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Target by selector or ref",note:"core points each step at a CSS selector or a ref, anywhere in the page, and waits for a selector that mounts later — OnboardingTour matches data-onboarding-tour-id on its children, or OnboardingTour.Target"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Beacon mode",note:'mode="beacon" puts a pulsing beacon on every target, opened in any order'})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Controlled current step",note:"step, defaultStep and onStepChange — OnboardingTour is started from outside and moves through its controller"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Per-step open and close callbacks",note:"onStepOpen / onStepClose on the tour and on each step — OnboardingTour reports every change with onOnboardingTourChange"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(iG,{title:"Animated move between steps",note:"Spotlight and tooltip glide to the next target (stepTransitionDuration) — OnboardingTour closes one popover and opens the next"})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iq,{})}),(0,t.jsx)(eb.Td,{ta:"center",children:(0,t.jsx)(iW,{})})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"When to use which."})," Reach for the core ",(0,t.jsx)(o.code,{children:"Tour"})," when steps should point at any element by selector or ref, when you want beacons the user opens in any order, or when the current step lives in your own state. Reach for ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," when the tour is part of the design — focus effects, a blurred backdrop, a stepper, popovers that move with the breakpoint — when steps carry their own typed data, when it loops, when you need to know whether the user finished or skipped, or when you want to highlight elements without a tour at all."]}),"\n",(0,t.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(o.p,{children:"Here is a full page example of an Onboarding Tour."}),"\n",(0,t.jsx)(n0.f,{component:"a",href:`${nQ.default.env.NEXT_PUBLIC_BASE_PATH||""}/demo`,target:"_blank",rightSection:(0,t.jsx)(n7,{style:{width:(0,Q.t)(18),height:(0,Q.t)(18)},stroke:1.5}),fullWidth:!0,justify:"space-between",h:50,px:20,radius:"md",children:(0,t.jsx)(o.p,{children:"Open Onboarding Tour example page"})}),"\n",(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component allows to create onboarding experiences for your users."]}),"\n",(0,t.jsx)(n,{data:it}),"\n",(0,t.jsx)(o.h2,{id:"onboardingtourstep",children:"OnboardingTourStep"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," interface defines the structure of each step in the tour."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"export type OnboardingTourStep<\n  T extends Record<string, unknown> = Record<string, unknown>,\n> = {\n  /** Unique id of the tour. Will be use for the data-onboarding-tour-id attribute */\n  id: string;\n\n  /** Header of the tour. You can also pass a React component here */\n  header?:\n    | React.ReactNode\n    | ((\n        tourController: OnboardingTourController<T>\n      ) => React.ReactNode);\n\n  /** Title of the tour. You can also pass a React component here */\n  title?:\n    | React.ReactNode\n    | ((\n        tourController: OnboardingTourController<T>\n      ) => React.ReactNode);\n\n  /** Custom Content of the tour. You can also pass a React component here */\n  content?:\n    | React.ReactNode\n    | ((\n        tourController: OnboardingTourController<T>\n      ) => React.ReactNode);\n\n  /** Footer of the tour. You can also pass a React component here */\n  footer?:\n    | React.ReactNode\n    | ((\n        tourController: OnboardingTourController<T>\n      ) => React.ReactNode);\n\n  /** Props passed to FocusReveal */\n  focusRevealProps?:\n    | OnboardingTourFocusRevealProps\n    | ((\n        tourController: OnboardingTourController<T>\n      ) => OnboardingTourFocusRevealProps);\n\n  /** Padding around the cutout highlight area for this step (px). Overrides tour-level cutoutPadding. */\n  cutoutPadding?: number;\n\n  /** Border radius of the cutout highlight area for this step (px). Overrides tour-level cutoutRadius. */\n  cutoutRadius?: number;\n} & T;\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The type is generic: custom properties are type-safe via the ",(0,t.jsx)(o.code,{children:"T"})," parameter (e.g., ",(0,t.jsx)(o.code,{children:"OnboardingTourStep<{ price: number }>"}),"). See the ",(0,t.jsx)(o.a,{href:"#custom-entry",children:"Custom entry"})," section for an example."]}),"\n",(0,t.jsxs)(o.p,{children:["Both ",(0,t.jsx)(o.code,{children:"header"}),", ",(0,t.jsx)(o.code,{children:"title"}),", ",(0,t.jsx)(o.code,{children:"content"}),", and ",(0,t.jsx)(o.code,{children:"footer"})," can be a string, a React component, or a function that receives ",(0,t.jsx)(o.code,{children:"tourController"})," and returns a React component.\nYou can use the ",(0,t.jsx)(o.code,{children:"OnboardingTourController"})," to access the current step and its properties, such as ",(0,t.jsx)(o.code,{children:"currentStep.id"}),", ",(0,t.jsx)(o.code,{children:"currentStep.title"}),", and so on."]}),"\n",(0,t.jsxs)(o.p,{children:["You may also set up the ",(0,t.jsx)(o.code,{children:"focusRevealProps"})," to customize the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component for each step. This allows you to control the focus and reveal behavior of the tour step.\nIn this case, ",(0,t.jsx)(o.code,{children:"focusRevealProps"})," can be either an object of type ",(0,t.jsx)(o.code,{children:"OnboardingTourFocusRevealProps"})," or a function that receives ",(0,t.jsx)(o.code,{children:"tourController"})," and returns an object of type ",(0,t.jsx)(o.code,{children:"OnboardingTourFocusRevealProps"}),"."]}),"\n",(0,t.jsx)(n,{data:iF}),"\n",(0,t.jsx)(o.h2,{id:"onboardingtourcontroller",children:"OnboardingTourController"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTourController"})," interface provides the current state of the tour. It also provides a series of actions to interact with the tour, such as the action to go to the next step ",(0,t.jsx)(o.code,{children:"nextStep()"})," or to end the tour ",(0,t.jsx)(o.code,{children:"endTour()"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"export type OnboardingTourController = Readonly<{\n  /** List of tour steps */\n  tour: OnboardingTourStep[];\n\n  /** Current step */\n  currentStep: OnboardingTourStep | undefined;\n\n  /** Current step index of the tour. Zero-based index */\n  currentStepIndex: number | undefined;\n\n  /** ID of the selected tour */\n  selectedStepId: string | undefined;\n\n  /** Set the current index */\n  setCurrentStepIndex: (index: number) => void;\n\n  /** Start the tour */\n  startTour: () => void;\n\n  /** End the tour programmatically */\n  endTour: () => void;\n\n  /** Skip the tour (user dismissed) */\n  skipTour: () => void;\n\n  /** Go to the next tour */\n  nextStep: () => void;\n\n  /** Go to the previous tour */\n  prevStep: () => void;\n\n  /** Options of the tour */\n  options: OnboardingTourOptions;\n}>;\n"})}),"\n",(0,t.jsx)(o.h2,{id:"tour-lifecycle-callbacks",children:"Tour Lifecycle Callbacks"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component provides callbacks to distinguish between different tour endings:"]}),"\n",(0,t.jsxs)(eb,{striped:!0,highlightOnHover:!0,withTableBorder:!0,withColumnBorders:!0,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{children:"Callback"}),(0,t.jsx)(eb.Th,{children:"When it fires"})]})}),(0,t.jsxs)(eb.Tbody,{children:[(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"onOnboardingTourStart"})}),(0,t.jsx)(eb.Td,{children:"The tour starts"})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"onOnboardingTourChange"})}),(0,t.jsx)(eb.Td,{children:"The active step changes"})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"onOnboardingTourComplete"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(o.p,{children:'The user finishes the last step (clicks "End")'})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"onOnboardingTourSkip"})}),(0,t.jsx)(eb.Td,{children:'The user clicks the "Skip" button'})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"onOnboardingTourEnd"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(o.p,{children:"Always fires when the tour ends, whether completed or skipped"})})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"onOnboardingTourEnd"})," if you don't need to distinguish between completion and skip. Use ",(0,t.jsx)(o.code,{children:"onOnboardingTourComplete"})," and ",(0,t.jsx)(o.code,{children:"onOnboardingTourSkip"})," when you need different behavior (e.g., saving progress, showing a different message)."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<OnboardingTour\n  tour={onboardingSteps}\n  started={started}\n  onOnboardingTourComplete={() => {\n    // User finished all steps\n    markTourAsCompleted();\n  }}\n  onOnboardingTourSkip={() => {\n    // User dismissed the tour early\n    markTourAsSkipped();\n  }}\n  onOnboardingTourEnd={() => {\n    // Always called — close the tour UI\n    close();\n  }}\n>\n  {/* Your content */}\n</OnboardingTour>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"keyboard-navigation",children:"Keyboard navigation"}),"\n",(0,t.jsx)(o.p,{children:"The tour can be driven from the keyboard. The arrow keys are left to the highlighted element and to any field that uses them itself (inputs, sliders, tabs, menus…), and a key pressed with a modifier is ignored."}),"\n",(0,t.jsxs)(eb,{striped:!0,highlightOnHover:!0,withTableBorder:!0,withColumnBorders:!0,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{children:"Key"}),(0,t.jsx)(eb.Th,{children:"Action"}),(0,t.jsx)(eb.Th,{children:"Prop"})]})}),(0,t.jsxs)(eb.Tbody,{children:[(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"→"})}),(0,t.jsx)(eb.Td,{children:"Next step, completes the tour on the last step"}),(0,t.jsx)(eb.Td,{children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(ti,{children:"withKeyboardNavigation"})," (default ",(0,t.jsx)(ti,{children:"true"}),")"]})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"←"})}),(0,t.jsx)(eb.Td,{children:"Previous step, never ends the tour from the first step"}),(0,t.jsx)(eb.Td,{children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(ti,{children:"withKeyboardNavigation"})," (default ",(0,t.jsx)(ti,{children:"true"}),")"]})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"Escape"})}),(0,t.jsx)(eb.Td,{children:"Skips the tour, like the Skip button"}),(0,t.jsx)(eb.Td,{children:(0,t.jsxs)(o.p,{children:[(0,t.jsx)(ti,{children:"closeOnEscape"})," (default ",(0,t.jsx)(ti,{children:"true"}),")"]})})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["In a right-to-left layout the arrows are mirrored. Set ",(0,t.jsx)(o.code,{children:"closeOnOverlayClick"})," to skip the tour with a click on the overlay around the highlighted element."]}),"\n",(0,t.jsx)(o.h2,{id:"step-counter",children:"Step counter"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"withStepCounter"})," to show the position in the tour between the Skip and the navigation buttons. Use ",(0,t.jsx)(o.code,{children:"stepCounterLabel"})," to translate it: it receives the current step (starting from 1) and the number of steps."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<OnboardingTour\n  tour={onboardingSteps}\n  started={started}\n  withStepCounter\n  stepCounterLabel={(current, total) => `Passo ${current} di ${total}`}\n/>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"steps-without-a-target",children:"Steps without a target"}),"\n",(0,t.jsxs)(o.p,{children:["A step whose ",(0,t.jsx)(o.code,{children:"id"})," matches no element, neither a child with ",(0,t.jsx)(o.code,{children:"data-onboarding-tour-id"})," nor an ",(0,t.jsx)(o.code,{children:"OnboardingTour.Target"}),", is shown in the middle of the screen, over the overlay. Use it for a welcome or a closing step."]}),"\n",(0,t.jsx)(n,{data:ie}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Every step popover is a dialog named by the step title and described by the step content"}),"\n",(0,t.jsxs)(o.li,{children:["When a step opens, the focus moves into its popover (",(0,t.jsx)(o.code,{children:"withAutoFocus"}),", default ",(0,t.jsx)(o.code,{children:"true"}),"), so a keyboard or screen reader user lands on it"]}),"\n",(0,t.jsxs)(o.li,{children:["When the tour ends, the focus goes back to the element that had it when the tour started (",(0,t.jsx)(o.code,{children:"returnFocus"}),", default ",(0,t.jsx)(o.code,{children:"true"}),")"]}),"\n",(0,t.jsxs)(o.li,{children:["With ",(0,t.jsx)(o.code,{children:"withStepCounter"}),", each step change is announced (",(0,t.jsx)(o.code,{children:'aria-live="polite"'}),")"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"define-the-onboarding-tour",children:"Define the onboarding tour"}),"\n",(0,t.jsxs)(o.p,{children:["You can define your onboarding tour by using the ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," array."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const onboardingSteps: OnboardingTourStep[] = [\n  {\n    id: 'welcome',\n    // Simple string\n    title: 'Welcome to the Onboarding Tour Component',\n    // Component\n    content: <Text size=\"lg\">Hello world!</Text>,\n  },\n  {\n    id: 'subtitle',\n    title: 'Another title',\n    content: (tourController: OnboardingTourController) => (\n      <Text size=\"lg\">\n        Hello world! {tourController.currentStep.id}\n      </Text>\n    ),\n  },\n];\n"})}),"\n",(0,t.jsx)(n,{data:iE}),"\n",(0,t.jsxs)(o.p,{children:["You may also handle the ",(0,t.jsx)(o.code,{children:"header"}),", ",(0,t.jsx)(o.code,{children:"title"}),", ",(0,t.jsx)(o.code,{children:"content"}),", and ",(0,t.jsx)(o.code,{children:"footer"})," by using the ",(0,t.jsx)(o.code,{children:"OnBoardingTour"})," component props. In this case the ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," will be ignored."]}),"\n",(0,t.jsx)(n,{data:ip}),"\n",(0,t.jsxs)(o.p,{children:["Anyway, the ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," are always available in the ",(0,t.jsx)(o.code,{children:"OnboardingTourController"})," and you can use them to display any variant. Fo example,"]}),"\n",(0,t.jsx)(n,{data:iL}),"\n",(0,t.jsx)(o.h2,{id:"custom-entry",children:"Custom entry"}),"\n",(0,t.jsxs)(o.p,{children:["You may use any custom entry in the ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," list to customize the tour. For example, here we're going to display some extra information in the footer, by using a custom property ",(0,t.jsx)(o.code,{children:"price"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const onboardingSteps: OnboardingTourStep[] = [\n  {\n    id: 'step-2',\n    title: 'Step-2',\n    description: 'Description of the Step 2',\n    price: 12,\n  },\n];\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Then we can use the ",(0,t.jsx)(o.code,{children:"footer"})," prop to display the ",(0,t.jsx)(o.code,{children:"price"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<OnboardingTour\n  footer={(onboardingTour: OnboardingTourController) => {\n    if (onboardingTour.currentStep?.price) {\n      return onboardingTour.currentStep?.price;\n    }\n    return null;\n  }}\n/>\n"})}),"\n",(0,t.jsx)(n,{data:ii}),"\n",(0,t.jsx)(o.h2,{id:"custom-popover-content",children:"Custom Popover Content"}),"\n",(0,t.jsx)(o.p,{children:"You may use the controller to override the default behavior of the tour or to add custom logic to the tour. For example, you could replace the default Popover content with a custom one:"}),"\n",(0,t.jsx)(n,{data:ic}),"\n",(0,t.jsx)(o.h2,{id:"custom-stepper",children:"Custom Stepper"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"stepper"})," prop allows you to customize the stepper of the tour. For example, you could use it to display a progress bar or a custom list of steps. Currently, the ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component use the ",(0,t.jsx)(o.a,{href:"https://mantine.dev/core/stepper/",children:"Mantine Stepper"})," component. You can use the ",(0,t.jsx)(o.code,{children:"stepperProps"})," and ",(0,t.jsx)(o.code,{children:"stepperStepProps"})," props to customize the stepper. Of course, you can build your own using the ",(0,t.jsx)(o.code,{children:"stepper"})," prop."]}),"\n",(0,t.jsx)(n,{data:iu}),"\n",(0,t.jsx)(o.h2,{id:"onboardingtourtarget",children:"OnboardingTour.Target"}),"\n",(0,t.jsxs)(o.p,{children:["You have to use the ",(0,t.jsx)(o.code,{children:"OnboardingTour.Target"})," when your tour component are not visible as children of the ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component.\nFor example, here is an example of a tour component that is not a child of the ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function AnotherComponent() {\n  return (\n    <Group>\n      {/* ❌ This won't work */}\n      <Button data-onboarding-tour-id=\"my-button\">Click me</Button>\n      <Button>Cancel</Button>\n    </Group>\n  );\n}\n\nfunction Demo() {\n  const onboardingSteps: OnboardingTourStep[] = [\n    {\n      id: 'welcome',\n      title: 'Welcome to the Onboarding Tour Component',\n      content:\n        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',\n    },\n    {\n      id: 'my-button',\n      title: 'The New Action Button',\n      content: 'This is the content for my button',\n    },\n  ];\n\n  return (\n    <OnboardingTour tour={onboardingSteps} started={true}>\n      <div>\n        <Title data-onboarding-tour-id=\"welcome\">\n          Welcome to the Onboarding Tour Component\n        </Title>\n        <AnotherComponent />\n      </div>\n    </OnboardingTour>\n  );\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The above example won't work because we can't get the ",(0,t.jsx)(o.code,{children:"data-onboarding-tour-id"})," attribute of the ",(0,t.jsx)(o.code,{children:"AnotherComponent"})," component.\nIn this case you have to use the ",(0,t.jsx)(o.code,{children:"OnboardingTour.Target"})," component to make it work. In short, instead of using the ",(0,t.jsx)(o.code,{children:"data-onboarding-tour-id"})," attribute of the component, you have to wrap your component with ",(0,t.jsx)(o.code,{children:"OnboardingTour.Target"}),"."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"function AnotherComponent() {\n  return (\n    <Group>\n      {/* ✅ This will work */}\n      <OnboardingTour.Target id=\"my-button\">\n        <Button>Click me</Button>\n      </OnboardingTour.Target>\n      <Button>Cancel</Button>\n    </Group>\n  );\n}\n\nfunction Demo() {\n  const onboardingSteps: OnboardingTourStep[] = [\n    {\n      id: 'welcome',\n      title: 'Welcome to the Onboarding Tour Component',\n      content:\n        'This is a demo of the Onboarding Tour component, which allows to create onboarding experiences for your users.',\n    },\n    {\n      id: 'my-button',\n      title: 'The New Action Button',\n      content: 'This is the content for my button',\n    },\n  ];\n\n  return (\n    <OnboardingTour tour={onboardingSteps} started={true}>\n      <div>\n        <Title data-onboarding-tour-id=\"welcome\">\n          Welcome to the Onboarding Tour Component\n        </Title>\n        <AnotherComponent />\n      </div>\n    </OnboardingTour>\n  );\n}\n"})}),"\n",(0,t.jsx)(n,{data:i$}),"\n",(0,t.jsxs)(o.p,{children:["You may also set up the ",(0,t.jsx)(o.code,{children:"focusRevealProps"})," to customize the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component for each target. This allows you to control the focus and reveal behavior of the tour step.\nIn this case, ",(0,t.jsx)(o.code,{children:"focusRevealProps"})," can be either an object of type ",(0,t.jsx)(o.code,{children:"OnboardingTourFocusRevealProps"})," or a function that receives ",(0,t.jsx)(o.code,{children:"tourController"})," and returns an object of type ",(0,t.jsx)(o.code,{children:"OnboardingTourFocusRevealProps"}),"."]}),"\n",(0,t.jsx)(n,{data:iV}),"\n",(0,t.jsx)(o.h2,{id:"onboardingtourfocusreveal",children:"OnboardingTour.FocusReveal"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component allows highlighting and making any component on your page more visible. The highlighting process can be controlled by three main properties:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"withOverlay"}),": displays a dark overlay across the entire page except for the highlighted component"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"withReveal"}),": scrolls the page to make the component to be highlighted visible"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"focusEffect"}),": applies a series of predefined effects when the component is highlighted"]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["Naturally, we have the ",(0,t.jsx)(o.code,{children:"focused"})," prop that controls when the component should be highlighted."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Note"}),": In all examples, we use the ",(0,t.jsx)(o.code,{children:"onBlur"})," event to remove focus from the component for demonstration purposes. In a real-world scenario, you might also use the ",(0,t.jsx)(o.code,{children:"focused"})," prop to control the focus state."]}),"\n"]}),"\n",(0,t.jsx)(n,{data:rs}),"\n",(0,t.jsx)(o.h2,{id:"uncontrolled-mode",children:"Uncontrolled Mode"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component can also be used in an uncontrolled mode. In this mode, the component will automatically highlight the children."]}),"\n",(0,t.jsx)(n,{data:r9}),"\n",(0,t.jsx)(o.h2,{id:"disable-target-interaction",children:"Disable target interaction"}),"\n",(0,t.jsxs)(o.p,{children:["When the target is focused, you can prevent mouse/keyboard interaction with the highlighted element by setting ",(0,t.jsx)(o.code,{children:"disableTargetInteraction"}),". This is useful when you want users to read the popover content and navigate the tour without interacting with the underlying component."]}),"\n",(0,t.jsx)(n,{data:rp}),"\n",(0,t.jsx)(o.h2,{id:"onboardingtourfocusrevealgroup",children:"OnboardingTour.FocusReveal.Group"}),"\n",(0,t.jsxs)(o.p,{children:["If you want to highlight multiple components, you can use the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal.Group"})," component. This component allows you to highlight multiple components at the same time.\nThis also allows for controlling multiple ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," components simultaneously, setting some common properties for all the components."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"export interface OnboardingTourFocusRevealGroupProps {\n  /** FocusReveal mode/effects when focused */\n  focusedMode?: OnboardingTourFocusRevealFocusedMode;\n\n  /** Indicator if element should be revealed. Default `false` */\n  withReveal?: boolean;\n\n  /** Will render overlay if set to `true` */\n  withOverlay?: boolean;\n\n  /** Props passed down to `Overlay` component */\n  overlayProps?: OverlayProps & ElementProps<'div'>;\n\n  /** Props passed down to the `Transition` component that used to animate the Overlay, use to configure duration and animation type, `{ duration: 150, transition: 'fade' }` by default */\n  transitionProps?: TransitionOverride;\n\n  /** Content */\n  children?: React.ReactNode;\n}\n"})}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Note"}),": The ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal.Group"})," component does not have the ",(0,t.jsx)(o.code,{children:"focused"})," prop. Instead, use the ",(0,t.jsx)(o.code,{children:"focused"})," prop in the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component. In addition, the ",(0,t.jsx)(o.code,{children:"withReveal"})," prop is set to ",(0,t.jsx)(o.code,{children:"false"})," by default. The ",(0,t.jsx)(o.code,{children:"defaultFocused"})," prop is set to ",(0,t.jsx)(o.code,{children:"true"})," by default."]}),"\n"]}),"\n",(0,t.jsx)(n,{data:rm}),"\n",(0,t.jsxs)(o.p,{children:["Below another example of using the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal.Group"})," component."]}),"\n",(0,t.jsx)(n,{data:rJ}),"\n",(0,t.jsx)(o.h2,{id:"withreveal",children:"withReveal"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"withReveal"})," props scrolls the page to make the component to be highlighted visible. This is useful when the component is not visible on the screen. Internally, the component uses the ",(0,t.jsx)(o.code,{children:"scrollIntoView"})," method to make the component visible, from the Mantine ",(0,t.jsx)(o.code,{children:"useScrollIntoView()"})," hook."]}),"\n",(0,t.jsxs)(o.p,{children:["Of course, you can customize the scroll behavior by using the ",(0,t.jsx)(o.code,{children:"revealProps"})," prop. This prop accepts the same properties as the ",(0,t.jsx)(o.code,{children:"useScrollIntoView()"})," method."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface ScrollIntoViewParams {\n  /** callback fired after scroll */\n  // onScrollFinish?: () => void; // See below\n\n  /** duration of scroll in milliseconds */\n  duration?: number;\n\n  /** axis of scroll */\n  axis?: 'x' | 'y';\n\n  /** custom mathematical easing function */\n  easing?: (t: number) => number;\n\n  /** additional distance between nearest edge and element */\n  offset?: number;\n\n  /** indicator if animation may be interrupted by user scrolling */\n  cancelable?: boolean;\n\n  /** prevents content jumping in scrolling lists with multiple targets */\n  isList?: boolean;\n}\n"})}),"\n",(0,t.jsx)(n,{data:r4}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Note"}),": The ",(0,t.jsx)(o.code,{children:"onScrollFinish"})," callback is not available in the ",(0,t.jsx)(o.code,{children:"revealsProps"})," prop. Instead, use the ",(0,t.jsx)(o.code,{children:"onRevealFinish"})," prop."]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"withoverlay",children:"withOverlay"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"withOverlay"})," prop displays a dark overlay across the entire page except for the highlighted component. This is useful when you want to focus the user's attention on a specific component. The overlay is customizable by using the ",(0,t.jsx)(o.code,{children:"overlayProps"})," prop."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface OverlayProps {\n  /** Controls overlay background-color opacity 0–1, disregarded when gradient prop is set, 0.6 by default */\n  backgroundOpacity?: number;\n\n  /** Overlay background blur, 0 by default */\n  blur?: string | number;\n\n  /** Determines whether content inside overlay should be vertically and horizontally centered, false by default */\n  center?: boolean;\n\n  /** Content inside overlay */\n  children?: React.ReactNode;\n\n  /** Overlay background-color, #000 by default */\n  color?: BackgroundColor;\n\n  /** Determines whether overlay should have fixed position instead of absolute, false by default */\n  fixed?: boolean;\n\n  /** Changes overlay to gradient. If set, color prop is ignored */\n  gradient?: string;\n\n  /** Key of theme.radius or any valid CSS value to set border-radius, 0 by default */\n  radius?: MantineRadius | number;\n\n  /** Overlay z-index, 200 by default */\n  zIndex?: string | number;\n}\n"})}),"\n",(0,t.jsx)(n,{data:rQ}),"\n",(0,t.jsx)(o.h2,{id:"scrollableref",children:"scrollableRef"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"scrollableRef"})," prop allows you to specify a custom scrollable element. This is useful when the component to be highlighted is inside a scrollable container. The ",(0,t.jsx)(o.code,{children:"scrollableRef"})," prop accepts a ",(0,t.jsx)(o.code,{children:"React.RefObject<HTMLElement>"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"with-simple-paper-container",children:"With simple Paper container"}),"\n",(0,t.jsx)(n,{data:r0}),"\n",(0,t.jsxs)(o.p,{children:["Below, by using the ",(0,t.jsx)(o.code,{children:"ScrollArea"})," component, we can create a scrollable container."]}),"\n",(0,t.jsx)(o.h3,{id:"scrollarea",children:"ScrollArea"}),"\n",(0,t.jsx)(n,{data:r5}),"\n",(0,t.jsx)(o.h2,{id:"custom-focus-mode",children:"Custom Focus Mode"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component allows you to create a custom focus mode. This is useful when you want to create a custom focus effect."]}),"\n",(0,t.jsx)(n,{data:rf}),"\n",(0,t.jsx)(o.h2,{id:"with-popover",children:"With Popover"}),"\n",(0,t.jsxs)(o.p,{children:["In addition to focus and reveal, you can add a ",(0,t.jsx)(o.code,{children:"Popover"})," display when the element gains focus by using the ",(0,t.jsx)(o.code,{children:"popoverContent"})," prop."]}),"\n",(0,t.jsx)(n,{data:r1}),"\n",(0,t.jsxs)(o.p,{children:["You can use the ",(0,t.jsx)(o.code,{children:"popoverProps"})," prop (are the same as the Mantine ",(0,t.jsx)(o.code,{children:"Popover"})," component. You can find the documentation ",(0,t.jsx)(o.a,{href:"https://mantine.dev/core/popover/?t=props",children:"here"}),") to manipulate the Mantine ",(0,t.jsx)(o.code,{children:"Popover"})," component."]}),"\n",(0,t.jsx)(n,{data:r2}),"\n",(0,t.jsx)(o.h3,{id:"popover-width",children:"Popover width"}),"\n",(0,t.jsxs)(o.p,{children:["The popover dropdown has a ",(0,t.jsxs)(o.strong,{children:["default ",(0,t.jsx)(o.code,{children:"max-width"})," of ",(0,t.jsx)(o.code,{children:"400px"})]}),", so wide or non-wrapping content (images, code blocks, fixed-width layouts) stays inside the viewport instead of overflowing. Note that ",(0,t.jsx)(o.code,{children:"maw"})," set on ",(0,t.jsx)(o.code,{children:"<OnboardingTour>"})," (or a step) sizes the ",(0,t.jsx)(o.strong,{children:"inner content box"}),", not the dropdown itself — to size the dropdown, use ",(0,t.jsx)(o.code,{children:"popoverProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<OnboardingTour\n  focusRevealProps={{\n    popoverProps: {\n      // Size the dropdown *up to* the 400px cap:\n      width: 320,\n      // Go wider than 400px — raise or remove the cap (`width` alone cannot exceed max-width; use 'none' to remove it):\n      styles: { dropdown: { maxWidth: 560 } },\n    },\n  }}\n  tour={steps}\n>\n  {/* ... */}\n</OnboardingTour>\n"})}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"styles.dropdown.maxWidth"})," is applied after the internal ",(0,t.jsx)(o.code,{children:"width"}),", so it wins over the default ",(0,t.jsx)(o.code,{children:"width: 'max-content'"}),". Because the cap is a ",(0,t.jsx)(o.code,{children:"max-width"}),", ",(0,t.jsx)(o.code,{children:"popoverProps.width"})," can only make the dropdown ",(0,t.jsx)(o.strong,{children:"narrower"})," than ",(0,t.jsx)(o.code,{children:"400px"})," — to make it ",(0,t.jsx)(o.strong,{children:"wider"}),", raise (or remove) the cap via ",(0,t.jsx)(o.code,{children:"styles.dropdown.maxWidth"}),". Both accept per-tour and per-step values via ",(0,t.jsx)(o.code,{children:"focusRevealProps"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Reveal the card below: the popover holds a long paragraph but stays capped at ",(0,t.jsx)(o.code,{children:"400px"})," and wraps instead of overflowing."]}),"\n",(0,t.jsx)(n,{data:r3}),"\n",(0,t.jsx)(o.h2,{id:"example-cycle",children:"Example: Cycle"}),"\n",(0,t.jsxs)(o.p,{children:["Here are some examples of how to use the ",(0,t.jsx)(o.code,{children:"OnboardingTour.FocusReveal"})," component in different scenarios."]}),"\n",(0,t.jsx)(n,{data:rd}),"\n",(0,t.jsx)(o.h2,{id:"example-multiple-focus-components",children:"Example: Multiple Focus components"}),"\n",(0,t.jsx)(n,{data:ru}),"\n",(0,t.jsx)(o.h2,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"OnboardingTour"})," component is responsive by default. Popover ",(0,t.jsx)(o.code,{children:"position"}),", ",(0,t.jsx)(o.code,{children:"offset"}),", ",(0,t.jsx)(o.code,{children:"width"}),", and ",(0,t.jsx)(o.code,{children:"arrowSize"})," accept responsive objects that map Mantine breakpoints to values, powered by ",(0,t.jsx)(o.code,{children:"useMatches()"})," under the hood."]}),"\n",(0,t.jsxs)(o.p,{children:["By default, the popover appears at the ",(0,t.jsx)(o.strong,{children:"bottom"})," on mobile (",(0,t.jsx)(o.code,{children:"base"}),") and on the ",(0,t.jsx)(o.strong,{children:"left"})," on larger screens (",(0,t.jsx)(o.code,{children:"sm"}),"+):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// Default popover props (you don't need to set these explicitly)\npopoverProps: {\n  position: { base: 'bottom', sm: 'left' },\n  withArrow: true,\n  arrowSize: 16,\n  offset: -4,\n  middlewares: { shift: { padding: 20 }, flip: true },\n  preventPositionChangeWhenVisible: false,\n}\n// The dropdown is additionally capped at `max-width: 400px` by default (see \"Popover width\").\n"})}),"\n",(0,t.jsx)(o.h3,{id:"responsive-demo",children:"Responsive Demo"}),"\n",(0,t.jsx)(o.p,{children:"Try the full-page responsive demo to see the behavior at different screen sizes:"}),"\n",(0,t.jsx)(n0.f,{component:"a",href:`${nQ.default.env.NEXT_PUBLIC_BASE_PATH||""}/responsive`,target:"_blank",rightSection:(0,t.jsx)(n7,{style:{width:(0,Q.t)(18),height:(0,Q.t)(18)},stroke:1.5}),fullWidth:!0,justify:"space-between",h:50,px:20,radius:"md",children:(0,t.jsx)(o.p,{children:"Open Responsive Onboarding Tour example page"})}),"\n",(0,t.jsx)(o.h3,{id:"responsive-props",children:"Responsive Props"}),"\n",(0,t.jsxs)(o.p,{children:["The following popover props accept responsive objects (",(0,t.jsx)(o.code,{children:"ResponsiveProp<T>"}),"):"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"position"})}),": ",(0,t.jsx)(o.code,{children:"FloatingPosition | { base: 'bottom', sm: 'left', lg: 'top' }"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"offset"})}),": ",(0,t.jsx)(o.code,{children:"number | { base: 8, sm: -4 }"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"width"})}),": ",(0,t.jsx)(o.code,{children:"PopoverWidth | { base: 'target', sm: 300 }"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.strong,{children:(0,t.jsx)(o.code,{children:"arrowSize"})}),": ",(0,t.jsx)(o.code,{children:"number | { base: 12, sm: 16 }"})]}),"\n"]}),"\n",(0,t.jsxs)(o.p,{children:["All other ",(0,t.jsx)(o.code,{children:"PopoverProps"})," (e.g., ",(0,t.jsx)(o.code,{children:"withArrow"}),", ",(0,t.jsx)(o.code,{children:"radius"}),", ",(0,t.jsx)(o.code,{children:"shadow"}),", ",(0,t.jsx)(o.code,{children:"middlewares"}),") work as usual."]}),"\n",(0,t.jsx)(o.h3,{id:"per-step-responsive-configuration",children:"Per-Step Responsive Configuration"}),"\n",(0,t.jsxs)(o.p,{children:["Each step can define its own responsive positioning via ",(0,t.jsx)(o.code,{children:"focusRevealProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const steps: OnboardingTourStep[] = [\n  {\n    id: 'step1',\n    title: 'Bottom on mobile, right on desktop',\n    content: 'Position adapts to screen size',\n    focusRevealProps: {\n      popoverProps: {\n        position: { base: 'bottom', sm: 'right' },\n        offset: { base: 8, sm: -4 },\n      },\n    },\n  },\n  {\n    id: 'step2',\n    title: 'Top on mobile, left on large screens',\n    content: 'Different breakpoints per step',\n    focusRevealProps: {\n      popoverProps: {\n        position: { base: 'top', lg: 'left' },\n        width: { base: 'target', md: 350 },\n      },\n    },\n  },\n];\n"})}),"\n",(0,t.jsx)(o.h2,{id:"scroll-behavior",children:"Scroll Behavior"}),"\n",(0,t.jsxs)(o.p,{children:["When a step activates, the target element is automatically scrolled into view and ",(0,t.jsx)(o.strong,{children:"centered"})," in the viewport. The Floating UI ",(0,t.jsx)(o.code,{children:"shift"})," and ",(0,t.jsx)(o.code,{children:"flip"})," middlewares then ensure the popover stays fully visible regardless of the resolved position."]}),"\n",(0,t.jsxs)(o.p,{children:["Because the tour keeps moving the target around, the popover keeps re-positioning ",(0,t.jsx)(o.strong,{children:"while a step is visible"})," by default — the library sets ",(0,t.jsx)(o.code,{children:"preventPositionChangeWhenVisible: false"})," in its default ",(0,t.jsx)(o.code,{children:"popoverProps"}),". Mantine 9.3 changed the ",(0,t.jsx)(o.code,{children:"Popover"})," default for this prop to ",(0,t.jsx)(o.code,{children:"true"})," (the popover picks its side on open and no longer flips or shifts while it stays visible); the tour opts out so its scroll-and-reposition behavior is identical across Mantine versions. To pin the popover's side on open instead, set it back to ",(0,t.jsx)(o.code,{children:"true"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"<OnboardingTour\n  focusRevealProps={{ popoverProps: { preventPositionChangeWhenVisible: true } }}\n  tour={steps}\n>\n  {/* ... */}\n</OnboardingTour>\n"})}),"\n",(0,t.jsx)(o.h2,{id:"cutout-highlight",children:"Cutout Highlight"}),"\n",(0,t.jsxs)(o.p,{children:["When the tour is active, a persistent overlay covers the page with a ",(0,t.jsx)(o.strong,{children:"cutout hole"})," around the focused element. By default the cutout has ",(0,t.jsx)(o.code,{children:"8px"})," padding and ",(0,t.jsx)(o.code,{children:"8px"})," border radius, but you can customize both values at the tour level and per step."]}),"\n",(0,t.jsx)(o.h3,{id:"props",children:"Props"}),"\n",(0,t.jsxs)(eb,{striped:!0,highlightOnHover:!0,withTableBorder:!0,withColumnBorders:!0,children:[(0,t.jsx)(eb.Thead,{children:(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Th,{children:"Prop"}),(0,t.jsx)(eb.Th,{children:"Type"}),(0,t.jsx)(eb.Th,{children:"Default"}),(0,t.jsx)(eb.Th,{children:"Description"})]})}),(0,t.jsxs)(eb.Tbody,{children:[(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"cutoutPadding"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"number"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"8"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(o.p,{children:"Padding around the cutout highlight area (px)"})})]}),(0,t.jsxs)(eb.Tr,{children:[(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"cutoutRadius"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"number"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsx)(ti,{children:"8"})}),(0,t.jsx)(eb.Td,{children:(0,t.jsxs)(o.p,{children:["Border radius of the cutout. Use ",(0,t.jsx)(ti,{children:"9999"})," for\ncircular elements."]})})]})]})]}),"\n",(0,t.jsxs)(o.p,{children:["Both props can be set on ",(0,t.jsx)(o.code,{children:"<OnboardingTour>"})," (tour-level default) and on individual ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," objects (per-step override). The resolution order is: ",(0,t.jsx)(o.strong,{children:"step > tour > default (8)"}),"."]}),"\n",(0,t.jsx)(o.h3,{id:"circular-and-custom-cutouts",children:"Circular and custom cutouts"}),"\n",(0,t.jsxs)(o.p,{children:["For circular elements like avatars or icon buttons, set ",(0,t.jsx)(o.code,{children:"cutoutRadius: 9999"})," on the step. For pill-shaped buttons, use a moderate radius like ",(0,t.jsx)(o.code,{children:"24"}),". Steps that don't specify these props inherit the tour-level values."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const steps: OnboardingTourStep[] = [\n  {\n    id: 'avatar',\n    title: 'Your Profile',\n    content: 'Click your avatar to open settings.',\n    cutoutPadding: 4,\n    cutoutRadius: 9999, // circular cutout\n  },\n  {\n    id: 'action-button',\n    title: 'Get Started',\n    content: 'This uses a pill-shaped cutout.',\n    cutoutPadding: 6,\n    cutoutRadius: 24,\n  },\n  {\n    id: 'panel',\n    title: 'Dashboard',\n    content: 'Default rectangular cutout (8px padding, 8px radius).',\n    // inherits tour-level defaults\n  },\n];\n"})}),"\n",(0,t.jsx)(n,{data:ir})]})}function iK(e={}){let{wrapper:o}={...nO(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(iH,{...e})}):iH(e)}function iU(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}function iY(e){let o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...nO(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"upgrade-guide",children:"Upgrade guide"}),"\n",(0,t.jsxs)(o.p,{children:["This page collects the ",(0,t.jsx)(o.strong,{children:"breaking changes"})," and ",(0,t.jsx)(o.strong,{children:"migration steps"})," for each major version of ",(0,t.jsx)(o.code,{children:"@gfazioli/mantine-onboarding-tour"}),". If you are starting a new project, you can skip this page — everything here is about updating existing code from an older version."]}),"\n",(0,t.jsxs)(o.p,{children:["New features introduced in a release (that do not break anything) are ",(0,t.jsx)(o.strong,{children:"not"})," listed here. See the ",(0,t.jsx)(o.a,{href:"https://github.com/gfazioli/mantine-onboarding-tour/releases",children:"GitHub Releases"})," page or the newsletter for the full changelog."]}),"\n",(0,t.jsx)(o.h2,{id:"v3",children:"v3"}),"\n",(0,t.jsx)(o.h3,{id:"breaking-changes-in-v3",children:"Breaking changes in v3"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.strong,{children:["1. ",(0,t.jsx)(o.code,{children:"onOnboardingTourClose"})," has been removed"]})}),"\n",(0,t.jsxs)(o.p,{children:["Replace it with ",(0,t.jsx)(o.code,{children:"onOnboardingTourComplete"}),", ",(0,t.jsx)(o.code,{children:"onOnboardingTourSkip"}),", or ",(0,t.jsx)(o.code,{children:"onOnboardingTourEnd"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// v2\n<OnboardingTour onOnboardingTourClose={() => setStarted(false)} />\n\n// v3\n<OnboardingTour\n  onOnboardingTourComplete={() => markAsCompleted()}\n  onOnboardingTourSkip={() => markAsSkipped()}\n  onOnboardingTourEnd={() => setStarted(false)}\n/>\n"})}),"\n",(0,t.jsxs)(o.p,{children:["If you don't need to distinguish between completion and skip, use ",(0,t.jsx)(o.code,{children:"onOnboardingTourEnd"})," alone — it fires in both cases."]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.strong,{children:["2. ",(0,t.jsx)(o.code,{children:"responsive"}),", ",(0,t.jsx)(o.code,{children:"mobileBreakpoint"}),", and ",(0,t.jsx)(o.code,{children:"mobilePosition"})," have been removed"]})}),"\n",(0,t.jsxs)(o.p,{children:["The popover is now always responsive. Use responsive objects on ",(0,t.jsx)(o.code,{children:"popoverProps"})," instead:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// v2\n<OnboardingTour responsive mobileBreakpoint=\"sm\" mobilePosition=\"bottom\" />\n\n// v3 — responsive by default, no props needed\n// Default position: { base: 'bottom', sm: 'left' }\n// To customize:\n<OnboardingTour\n  focusRevealProps={{\n    popoverProps: {\n      position: { base: 'bottom', sm: 'right' },\n    },\n  }}\n/>\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Per-step responsive positioning via ",(0,t.jsx)(o.code,{children:"focusRevealProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"const steps: OnboardingTourStep[] = [\n  {\n    id: 'step1',\n    title: 'Welcome',\n    content: 'Hello!',\n    focusRevealProps: {\n      popoverProps: {\n        position: { base: 'top', md: 'right' },\n        offset: { base: 8, md: -4 },\n      },\n    },\n  },\n];\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.strong,{children:["3. ",(0,t.jsx)(o.code,{children:"useOnboardingTour"})," hook has been removed from the public API"]})}),"\n",(0,t.jsxs)(o.p,{children:["This hook was internal and created isolated state disconnected from the ",(0,t.jsx)(o.code,{children:"<OnboardingTour>"})," component. All tour control is available through props and render functions:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// v2\nimport { useOnboardingTour } from '@gfazioli/mantine-onboarding-tour';\n\n// v3 — remove the import, use component props instead\n<OnboardingTour\n  content={(controller) => (\n    <div>Step {controller.currentStepIndex}</div>\n  )}\n/>;\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.strong,{children:["4. ",(0,t.jsx)(o.code,{children:"OnboardingTourStep"})," now requires a generic for custom properties"]})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"// v2\nconst steps: OnboardingTourStep[] = [\n  { id: 'step1', title: 'Hello', price: 9.99 },\n];\n\n// v3\nconst steps: OnboardingTourStep<{ price: number }>[] = [\n  { id: 'step1', title: 'Hello', price: 9.99 },\n];\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.strong,{children:["5. ",(0,t.jsx)(o.code,{children:"popoverProps"})," type changed to ",(0,t.jsx)(o.code,{children:"ResponsivePopoverProps"})]})}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"position"}),", ",(0,t.jsx)(o.code,{children:"offset"}),", ",(0,t.jsx)(o.code,{children:"width"}),", and ",(0,t.jsx)(o.code,{children:"arrowSize"})," properties now accept ",(0,t.jsx)(o.code,{children:"ResponsiveProp<T>"})," (a scalar or a breakpoint-to-value object). All other ",(0,t.jsx)(o.code,{children:"PopoverProps"})," work as before."]})]})}function iX(e={}){let{wrapper:o}={...nO(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(iY,{...e})}):iY(e)}let iZ={OnboardingTour:{selectors:{popoverContent:"The styles applied to the popover content",stepCounter:"The step counter, shown with `withStepCounter`",centered:"The dialog of a step whose id matches no element, shown in the middle of the screen"},vars:{}},OnboardingTourFocusReveal:{selectors:{focused:"Styles applied when component is focused",overlay:"Styles applied to overlay element"},vars:{},modifiers:[{modifier:"data-onboarding-tour-focus-reveal-focused",selector:"focused",value:"true | false"},{modifier:"data-onboarding-tour-focus-reveal-mode",selector:"focused",value:rg.join(" | ")}]}};e.s(["default",0,function(){return(0,t.jsxs)(nX.f,{children:[(0,t.jsx)(nY,{data:nZ.f}),(0,t.jsx)(n_,{docgen:nJ.default,componentsProps:["OnboardingTour","OnboardingTourTarget","OnboardingTourFocusReveal","OnboardingTourFocusRevealGroup"],componentPrefix:"OnboardingTour",componentsStyles:["OnboardingTour","OnboardingTourFocusReveal"],stylesApiData:iZ,migrations:(0,t.jsx)(iX,{}),children:(0,t.jsx)(iK,{})})]})}],13321)},3828,(e,t,o)=>{t.exports=e.r(26990)}]);
import{c as B}from"./chunk-4KE642ED-ClEiTESh.js";import{p as Q}from"./treemap-KMMF4GRG-7ORZ52ND-DX-HLaBb.js";import{r as X,m as r,N as Y,p as w,aP as q,a as I,L as J,aN as K,aQ as Z,aR as W,aS as _,W as ee,j as te,V as ae,H as ie,U as le,G as re,$ as se}from"./mermaid.esm.min-tktjpef0.js";import"./chunk-OMTJKCYW-D_4yfbGb.js";import"./app-DFkAz4RW.js";var M=X.pie,v={sections:new Map,showData:!1,config:M},u=v.sections,y=v.showData,oe=structuredClone(M),ne=r(()=>structuredClone(oe),"getConfig"),pe=r(()=>{u=new Map,y=v.showData,Y()},"clear"),de=r(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(e)||(u.set(e,a),w.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=r(()=>u,"getSections"),ue=r(e=>{y=e},"setShowData"),ge=r(()=>y,"getShowData"),N={getConfig:ne,clear:pe,setDiagramTitle:te,getDiagramTitle:ae,setAccTitle:ie,getAccTitle:le,setAccDescription:re,getAccDescription:se,addSection:de,getSections:ce,setShowData:ue,getShowData:ge},me=r((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),he={parse:r(async e=>{let a=await Q("pie",e);w.debug(a),me(a,N)},"parse")},fe=r(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),$e=fe,xe=r(e=>{let a=[...e.values()].reduce((l,s)=>l+s,0),D=[...e.entries()].map(([l,s])=>({label:l,value:s})).filter(l=>l.value/a*100>=1).sort((l,s)=>s.value-l.value);return q().value(l=>l.value)(D)},"createPieArcs"),Se=r((e,a,D,l)=>{w.debug(`rendering pie chart
`+e);let s=l.db,T=I(),b=J(s.getConfig(),T.pie),C=40,o=18,d=4,n=450,g=n,m=K(a),p=m.append("g");p.attr("transform","translate("+g/2+","+n/2+")");let{themeVariables:i}=T,[k]=Z(i.pieOuterStrokeWidth);k??(k=2);let A=b.textPosition,c=Math.min(g,n)/2-C,P=W().innerRadius(0).outerRadius(c),L=W().innerRadius(c*A).outerRadius(c*A);p.append("circle").attr("cx",0).attr("cy",0).attr("r",c+k/2).attr("class","pieOuterCircle");let h=s.getSections(),E=xe(h),G=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],f=0;h.forEach(t=>{f+=t});let O=E.filter(t=>(t.data.value/f*100).toFixed(0)!=="0"),$=_(G);p.selectAll("mySlices").data(O).enter().append("path").attr("d",P).attr("fill",t=>$(t.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(O).enter().append("text").text(t=>(t.data.value/f*100).toFixed(0)+"%").attr("transform",t=>"translate("+L.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-(n-50)/2).attr("class","pieTitleText");let R=[...h.entries()].map(([t,S])=>({label:t,value:S})),x=p.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(t,S)=>{let F=o+d,U=F*R.length/2,V=12*o,j=S*F-U;return"translate("+V+","+j+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",t=>$(t.label)).style("stroke",t=>$(t.label)),x.append("text").attr("x",o+d).attr("y",o-d).text(t=>s.getShowData()?`${t.label} [${t.value}]`:t.label);let H=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),z=g+C+o+d+H;m.attr("viewBox",`0 0 ${z} ${n}`),ee(m,n,z,b.useMaxWidth)},"draw"),we={draw:Se},Ce={parser:he,db:N,renderer:we,styles:$e};export{Ce as diagram};

"use strict";(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[815],{5008:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});const l=(e,t,a)=>{const l=a.ellipseContainer,n=a.groupOne,i=a.groupTwo,s=a.groupThree,r=a.lables,o=a.cityCircles;a.cityLables.selectAll("text").remove(),l.selectAll("ellipse").transition().duration(500).attr("rx",0).attr("ry",0);let c=n.selectAll("path");function u(t){let a=e.interpolateNumber(70,0);return function(l){let n=a(l);return e.arc().outerRadius(n-2).innerRadius(n)(t)}}c.transition().ease(e.easePoly).duration(1e3).attrTween("d",u).style("opacity",0),c=i.selectAll("path"),c.transition().ease(e.easePoly).duration(1e3).attrTween("d",u).style("opacity",0),c=s.selectAll("path"),c.transition().ease(e.easePoly).duration(1e3).attrTween("d",u).style("opacity",0),t.select(".rainG").transition().duration(500).style("opacity",0),r.selectAll("text").transition().duration(500).style("opacity",0),o.selectAll("circle").classed("clicked",!1)}}}]);
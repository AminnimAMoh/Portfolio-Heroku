"use strict";(self.webpackChunkandramedian_design=self.webpackChunkandramedian_design||[]).push([[991],{4008:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});const r=(t,e,a)=>{const r=e.yearsSlums,n=e.lableSlums,l=t.data.map((t=>({year:t.year,value:t.number})));n.attr("transform","translate(100,20)"),r.attr("transform","translate(150,20)"),r.selectAll("rect").data(l).enter().append("rect").attr("transform",(function(t,e){return"translate("+e*a+",10)"})).attr("width",2).attr("height",0).style("fill","#7a9193"),r.selectAll("text").data(l).enter().append("text").attr("transform",(function(t,e){return"translate("+(e*a+30)+",60)"})).text((function(t){return"% "+t.value})).style("text-anchor","middle").style("opacity",0).style("fill","#9C3C41").style("font-size","8pt"),n.append("text").attr("transform","translate(-100,60)").text("Slums Population").style("fill","#9C3C41").style("font-size","8pt")}}}]);
function metricDetails(){
 const metrics=[
  ['北极星','NBA 采纳率','64.8%','58.7%','≥50%','+4.2%','good','达标'],
  ['下钻','修改后 NBA 应用率','18.0%','15.6%','观察','+2.4%','good','提升'],
  ['北极星','重复问题处理工时下降率','52.0%','46.8%','≥50%','+5.2%','good','达标'],
  ['下钻','销售可释放工时比例','25.0%','21.4%','观察','+3.6%','good','提升'],
  ['北极星','严重安全事故数','0 起','0 起','=0','0','good','稳定']
 ];
 const departments=[
  ['大客户销售部','56.2%','68.4%','19.6%','27.8%'],
  ['续费增购部','54.6%','66.7%','20.2%','26.5%'],
  ['渠道销售部','49.8%','62.1%','17.3%','24.1%'],
  ['区域销售部','47.2%','59.8%','14.9%','22.6%']
 ];
 const people=[
  ['陈晨','大客户销售部','59.1%','72.6%','21.4%','28.9%'],
  ['刘凯','续费增购部','55.8%','69.8%','20.7%','26.7%'],
  ['林楠','渠道销售部','51.6%','65.3%','18.2%','24.6%'],
  ['王敏','区域销售部','45.7%','58.9%','14.1%','21.9%']
 ];
 return `<div class="page metric-detail-page">${head('指标分析','按时间、业务部门和销售人员查看 MVP 指标的完整数值与差异。','')}<div class="metric-filterbar card"><label><span>时间范围</span><select data-metric-filter="time"><option>最近 30 天</option><option>最近 7 天</option><option>本季度</option><option>自定义时间</option></select></label><label><span>业务部门</span><select data-metric-filter="department"><option>全部业务部门</option><option>大客户销售部</option><option>渠道销售部</option><option>续费增购部</option><option>区域销售部</option></select></label><label><span>销售人员</span><select data-metric-filter="sales"><option>全部销售人员</option><option>陈晨</option><option>刘凯</option><option>林楠</option><option>王敏</option></select></label><div class="filter-scope"><span>当前范围</span><b data-filter-scope>最近 30 天 · 全部业务部门 · 全部销售人员</b></div></div><section class="detail-section"><div class="detail-heading"><div><span>METRIC DETAIL</span><h2>全部指标</h2></div><em>5 项指标</em></div><div class="card detail-table-wrap"><table class="data-table metric-table"><thead><tr><th>类型</th><th>指标</th><th>当前值</th><th>基线值</th><th>目标</th><th>变化</th><th>状态</th></tr></thead><tbody>${metrics.map(r=>`<tr><td><span class="metric-type ${r[0]==='北极星'?'star':'drill'}">${r[0]}</span></td><td><b>${r[1]}</b></td><td class="metric-value">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td class="good-text">${r[5]}</td><td><span class="status ${r[6]}">${r[7]}</span></td></tr>`).join('')}</tbody></table></div></section><div class="analysis-split"><section class="detail-section"><div class="detail-heading"><div><span>DEPARTMENT</span><h2>业务部门对比</h2></div><em>按重复问题处理工时下降率降序</em></div><div class="card detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>业务部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th></tr></thead><tbody>${departments.map(r=>`<tr>${r.map((v,i)=>`<td class="${i===1?'metric-value':''}">${i===0?'<b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section><section class="detail-section"><div class="detail-heading"><div><span>SALES</span><h2>销售人员明细</h2></div><em>按重复问题处理工时下降率降序</em></div><div class="card detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>销售人员</th><th>部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th></tr></thead><tbody>${people.map((r,n)=>`<tr>${r.map((v,i)=>`<td class="${i===2?'metric-value':''}">${i===0?'<span class="rank">'+(n+1)+'</span><b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section></div></div>`
}
function bindMetricDetail(){
 const page=document.querySelector('.metric-detail-page');if(!page)return;
 const filters=[...page.querySelectorAll('[data-metric-filter]')],scope=page.querySelector('[data-filter-scope]');
 filters.forEach(select=>select.onchange=()=>{scope.textContent=filters.map(x=>x.value).join(' · ');toast('指标数据已按筛选条件更新')})
}

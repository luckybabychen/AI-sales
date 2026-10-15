function metricDetails(){
 const metrics=[
  ['北极星','NBA 采纳率','64.8%','58.7%','≥50%','+4.2%','832','good','达标'],
  ['下钻','修改后 NBA 应用率','18.0%','15.6%','观察','+2.4%','231','good','提升'],
  ['北极星','重复问题处理工时下降率','52.0%','46.8%','≥50%','+5.2%','416','good','达标'],
  ['下钻','销售可释放工时比例','25.0%','21.4%','观察','+3.6%','416','good','提升'],
  ['北极星','严重安全事故数','0 起','0 起','=0','0','1,284','good','稳定'],
  ['护栏','回答准确率','93.2%','91.4%','≥90%','+1.8%','742','good','达标'],
  ['护栏','问题解决率','52.6%','49.5%','不低于人工','+3.1%','286','warn','测量中']
 ];
 const departments=[
  ['大客户销售部','56.2%','68.4%','19.6%','27.8%','94.6%','57.1%'],
  ['续费增购部','54.6%','66.7%','20.2%','26.5%','94.1%','55.8%'],
  ['渠道销售部','49.8%','62.1%','17.3%','24.1%','92.8%','51.4%'],
  ['区域销售部','47.2%','59.8%','14.9%','22.6%','90.7%','47.9%']
 ];
 const people=[
  ['陈晨','大客户销售部','59.1%','72.6%','21.4%','28.9%','95.2%','61.3%'],
  ['刘凯','续费增购部','55.8%','69.8%','20.7%','26.7%','94.7%','58.6%'],
  ['林楠','渠道销售部','51.6%','65.3%','18.2%','24.6%','93.1%','53.2%'],
  ['王敏','区域销售部','45.7%','58.9%','14.1%','21.9%','89.8%','46.5%']
 ];
 return `<div class="page metric-detail-page">${head('指标分析','按时间、业务部门和销售人员查看 MVP 指标的完整数值与差异。','<button class="btn light" data-toast="指标明细已导出">导出数据</button>')}<div class="metric-filterbar card"><label><span>时间范围</span><select data-metric-filter="time"><option>最近 30 天</option><option>最近 7 天</option><option>本季度</option><option>自定义时间</option></select></label><label><span>业务部门</span><select data-metric-filter="department"><option>全部业务部门</option><option>大客户销售部</option><option>渠道销售部</option><option>续费增购部</option><option>区域销售部</option></select></label><label><span>销售人员</span><select data-metric-filter="sales"><option>全部销售人员</option><option>陈晨</option><option>刘凯</option><option>林楠</option><option>王敏</option></select></label><div class="filter-scope"><span>当前范围</span><b data-filter-scope>最近 30 天 · 全部业务部门 · 全部销售人员</b></div></div><section class="detail-section"><div class="detail-heading"><div><span>METRIC DETAIL</span><h2>全部指标</h2></div><em data-metric-count>7 项指标 · 1,284 次有效调用</em></div><div class="metric-local-filters"><select data-detail-filter="type"><option value="">全部指标类型</option><option>北极星</option><option>下钻</option><option>护栏</option></select><select data-detail-filter="name"><option value="">全部指标名称</option><option>NBA 采纳率</option><option>修改后 NBA 应用率</option><option>重复问题处理工时下降率</option><option>销售可释放工时比例</option><option>严重安全事故数</option><option>回答准确率</option><option>问题解决率</option></select><select data-detail-filter="status"><option value="">全部状态</option><option>达标</option><option>提升</option><option>稳定</option><option>测量中</option></select></div><div class="card detail-table-wrap"><table class="data-table metric-table"><thead><tr><th>类型</th><th>指标</th><th>当前值</th><th>对比值</th><th>目标</th><th>变化</th><th>样本量</th><th>状态</th></tr></thead><tbody>${metrics.map(r=>`<tr data-metric-row data-type="${r[0]}" data-name="${r[1]}" data-status="${r[8]}"><td><span class="metric-type ${r[0]==='北极星'?'star':r[0]==='护栏'?'guard':'drill'}">${r[0]}</span></td><td><b>${r[1]}</b></td><td class="metric-value">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td class="good-text">${r[5]}</td><td>${r[6]}</td><td><span class="status ${r[7]}">${r[8]}</span></td></tr>`).join('')}</tbody></table><div class="metric-empty" hidden>没有符合当前条件的指标</div></div></section><div class="analysis-split"><section class="detail-section"><div class="detail-heading"><div><span>DEPARTMENT</span><h2>业务部门对比</h2></div><em>按重复问题处理工时下降率降序</em></div><div class="card detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>业务部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th><th>回答准确率</th><th>问题解决率</th></tr></thead><tbody>${departments.map(r=>`<tr>${r.map((v,i)=>`<td class="${i===1?'metric-value':''}">${i===0?'<b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section><section class="detail-section"><div class="detail-heading"><div><span>SALES</span><h2>销售人员明细</h2></div><em>按重复问题处理工时下降率降序</em></div><div class="card detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>销售人员</th><th>部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th><th>回答准确率</th><th>问题解决率</th></tr></thead><tbody>${people.map((r,n)=>`<tr>${r.map((v,i)=>`<td class="${i===2?'metric-value':''}">${i===0?'<span class="rank">'+(n+1)+'</span><b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('')}</tbody></table></div></section></div></div>`
}
function bindMetricDetail(){
 const page=document.querySelector('.metric-detail-page');if(!page)return;
 const filters=[...page.querySelectorAll('[data-metric-filter]')],scope=page.querySelector('[data-filter-scope]');
 filters.forEach(select=>select.onchange=()=>{scope.textContent=filters.map(x=>x.value).join(' · ');toast('指标数据已按筛选条件更新')});
 const type=page.querySelector('[data-detail-filter="type"]'),name=page.querySelector('[data-detail-filter="name"]'),status=page.querySelector('[data-detail-filter="status"]'),rows=[...page.querySelectorAll('[data-metric-row]')],count=page.querySelector('[data-metric-count]'),empty=page.querySelector('.metric-empty');
 const apply=()=>{let visible=0;rows.forEach(row=>{const show=(!type.value||row.dataset.type===type.value)&&(!status.value||row.dataset.status===status.value)&&(!name.value||row.dataset.name===name.value);row.hidden=!show;if(show)visible++});count.textContent=`${visible} 项指标 · 1,284 次有效调用`;empty.hidden=visible>0};
 type.onchange=apply;status.onchange=apply;name.onchange=apply
}

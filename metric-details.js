const allMetricRows=[
 ['北极星','NBA 采纳率','64.8%','58.7%','≥50%','+4.2%','good','达标'],
 ['下钻','修改后 NBA 应用率','18.0%','15.6%','观察','+2.4%','good','提升'],
 ['北极星','重复问题处理工时下降率','52.0%','46.8%','≥50%','+5.2%','good','达标'],
 ['北极星','严重安全事故数','0 起','0 起','=0','0','good','稳定']
];
function calculationLink(){return `<button class="calculation-link" data-open-calculation><span>ƒ</span> 指标计算</button>`}
function calculationModal(){return `<div class="calculation-modal" data-calculation-modal hidden><div class="calculation-backdrop" data-close-calculation></div><section class="calculation-panel" role="dialog" aria-modal="true" aria-labelledby="calculationTitle"><header><div><span>METRIC DEFINITION</span><h2 id="calculationTitle">指标计算</h2><p>时间范围与筛选对象改变统计样本，指标公式保持不变。</p></div><button data-close-calculation aria-label="关闭">×</button></header><div class="calculation-list"><article><span>01</span><div><h3>NBA 采纳率</h3><p>被销售直接采纳的 NBA 数量 <i>÷</i> 有效 NBA 总数 <i>× 100%</i></p></div></article><article><span>02</span><div><h3>修改后 NBA 应用率</h3><p>被销售修改后应用的 NBA 数量 <i>÷</i> 有效 NBA 总数 <i>× 100%</i></p></div></article><article><span>03</span><div><h3>重复问题处理工时下降率</h3><p>（基线期重复问题平均处理时长 <i>−</i> 当前平均处理时长）<i>÷</i> 基线期重复问题平均处理时长 <i>× 100%</i></p></div></article><article><span>04</span><div><h3>严重安全事故数</h3><p>统计范围内经确认并按事故去重的严重安全事件数量</p></div></article></div><footer><button class="btn primary" data-close-calculation>我知道了</button></footer></section></div>`}
function allMetricsTable(){return `<section class="detail-section dashboard-metric-section"><div class="detail-heading"><div><span>METRIC DETAIL</span><h2>全部指标</h2></div>${calculationLink()}</div><div class="card detail-table-wrap"><table class="data-table metric-table"><thead><tr><th>类型</th><th>指标</th><th>当前值</th><th>基线值</th><th>目标</th><th>变化</th><th>状态</th></tr></thead><tbody>${allMetricRows.map(r=>`<tr><td><span class="metric-type ${r[0]==='北极星'?'star':'drill'}">${r[0]}</span></td><td><b>${r[1]}</b></td><td class="metric-value">${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td class="good-text">${r[5]}</td><td><span class="status ${r[6]}">${r[7]}</span></td></tr>`).join('')}</tbody></table></div></section>`}
function dashboardAnalysis(){
 const scenes=[
  ['价格询问 → 配置澄清','58.6%','72.4%','21.8%','28.4%','0 起'],
  ['试用 / 下载 / 安装激活','56.9%','69.8%','19.7%','27.1%','0 起'],
  ['需求发现与资格判断','54.3%','67.2%','18.9%','26.4%','0 起'],
  ['产品与版本推荐','52.8%','65.6%','18.1%','25.7%','0 起'],
  ['试用 / 演示后跟进','51.2%','63.9%','17.5%','24.8%','0 起'],
  ['技术问题解决','49.7%','61.8%','16.4%','23.9%','0 起'],
  ['免费 / 试用 / 付费边界','48.5%','60.7%','15.8%','23.2%','0 起'],
  ['价格 / 竞品 / 服务异议','46.1%','57.9%','14.6%','21.7%','0 起']
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
 const sceneRows=scenes.map((r,n)=>`<tr>${r.map((v,i)=>`<td class="${i===1?'metric-value':''}">${i===0?'<span class="scene-rank">'+String(n+1).padStart(2,'0')+'</span><b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('');
 const departmentRows=departments.map(r=>`<tr>${r.map((v,i)=>`<td class="${i===1?'metric-value':''}">${i===0?'<b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('');
 const peopleRows=people.map((r,n)=>`<tr>${r.map((v,i)=>`<td class="${i===2?'metric-value':''}">${i===0?'<span class="rank">'+(n+1)+'</span><b>'+v+'</b>':v}</td>`).join('')}</tr>`).join('');
 return `<section class="detail-section dashboard-analysis"><div class="detail-heading"><div><span>BREAKDOWN</span><h2>详细分析</h2></div></div><div class="analysis-control card"><div class="metric-filterbar"><label><span>时间范围</span><select data-metric-filter="time"><option>最近 30 天</option><option>最近 7 天</option><option>本季度</option><option>自定义时间</option></select></label><label><span>业务部门</span><select data-metric-filter="department"><option>全部业务部门</option><option>大客户销售部</option><option>渠道销售部</option><option>续费增购部</option><option>区域销售部</option></select></label><label><span>销售人员</span><select data-metric-filter="sales"><option>全部销售人员</option><option>陈晨</option><option>刘凯</option><option>林楠</option><option>王敏</option></select></label><div class="filter-scope"><span>当前范围</span><b data-filter-scope>最近 30 天 · 全部业务部门 · 全部销售人员</b></div></div><div class="analysis-tabs" role="tablist"><button class="active" data-analysis-tab="scene">按场景</button><button data-analysis-tab="department">按部门</button><button data-analysis-tab="sales">按销售人员</button></div><div class="analysis-panel active" data-analysis-panel="scene"><div class="panel-caption"><b>场景指标对比</b><span>按重复问题处理工时下降率降序</span></div><div class="detail-table-wrap"><table class="data-table compact-analysis scenario-analysis"><thead><tr><th>场景</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th><th>严重安全事故数</th></tr></thead><tbody>${sceneRows}</tbody></table></div></div><div class="analysis-panel" data-analysis-panel="department"><div class="panel-caption"><b>业务部门对比</b><span>按重复问题处理工时下降率降序</span></div><div class="detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>业务部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th></tr></thead><tbody>${departmentRows}</tbody></table></div></div><div class="analysis-panel" data-analysis-panel="sales"><div class="panel-caption"><b>销售人员明细</b><span>按重复问题处理工时下降率降序</span></div><div class="detail-table-wrap"><table class="data-table compact-analysis"><thead><tr><th>销售人员</th><th>部门</th><th>重复问题处理工时下降率</th><th>NBA 采纳率</th><th>修改后 NBA 应用率</th><th>销售可释放工时比例</th></tr></thead><tbody>${peopleRows}</tbody></table></div></div></div>${calculationModal()}</section>`
}
function bindMetricDetail(){
 const page=document.querySelector('.metric-detail-page, .dashboard-analysis');if(!page)return;
 const filters=[...page.querySelectorAll('[data-metric-filter]')],scope=page.querySelector('[data-filter-scope]');
 filters.forEach(select=>select.onchange=()=>{scope.textContent=filters.map(x=>x.value).join(' · ');toast('指标数据已按筛选条件更新')});
 page.querySelectorAll('[data-analysis-tab]').forEach(button=>button.onclick=()=>{page.querySelectorAll('[data-analysis-tab]').forEach(x=>x.classList.toggle('active',x===button));page.querySelectorAll('[data-analysis-panel]').forEach(x=>x.classList.toggle('active',x.dataset.analysisPanel===button.dataset.analysisTab))});
 const modal=document.querySelector('[data-calculation-modal]');document.querySelectorAll('[data-open-calculation]').forEach(button=>button.onclick=()=>{modal.hidden=false;document.body.classList.add('modal-open')});modal?.querySelectorAll('[data-close-calculation]').forEach(button=>button.onclick=()=>{modal.hidden=true;document.body.classList.remove('modal-open')})
}



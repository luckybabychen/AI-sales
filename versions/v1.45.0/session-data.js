const sessionRows=[
 {id:'S-20841',company:'上海启辰贸易',sales:'陈晨',json:{scene_intent:'价格咨询',product_version:'专业版',account_count:200,opening_time:null},nba:'NBA-9281',action:'采纳',tone:'good',duration:'18.4 秒'},
 {id:'S-20836',company:'杭州冠科科技',sales:'刘凯',json:{scene_intent:'竞品比较',go_live_window:'1个月内',priority:'上线速度',industry:'制造业'},nba:'NBA-9276',action:'修改后应用',tone:'good',duration:'32.7 秒'},
 {id:'S-20829',company:'成都利丰商贸',sales:'林楠',json:{scene_intent:'索取报价',account_count:null,product_version:null,quote_request:'完整报价单'},nba:'NBA-9269',action:'拒绝',tone:'bad',duration:'46.2 秒'},
 {id:'S-20818',company:'深圳云策供应链',sales:'王敏',json:{scene_intent:'安装激活',error_code:'E1042',client_version:'v8.6',os:'Windows'},nba:'NBA-9258',action:'采纳',tone:'good',duration:'21.6 秒'}
];
function sessionData(){return `<div class="page session-data-page">${head('会话数据','查看每次 AI 唤起产生的结构化识别信息、NBA 与销售处理结果。','<button class="btn light" data-toast="会话数据已导出">导出数据</button>')}<div class="toolbar"><div class="filters"><input class="control" placeholder="⌕ 搜索会话编号或公司"><button class="control">全部销售⌄</button><button class="control">全部动作⌄</button></div></div><div class="card table-card session-table-wrap"><table class="data-table session-table"><thead><tr><th>会话编号</th><th>公司名称</th><th>所属销售</th><th>本轮识别信息</th><th>NBA 编号</th><th>执行动作</th><th>处理时长</th></tr></thead><tbody>${sessionRows.map(r=>`<tr><td><button class="session-link" data-session-trace="${r.id}">${r.id}</button></td><td><b>${r.company}</b></td><td>${r.sales}</td><td><pre class="json-cell">${escapeSessionJson(JSON.stringify(r.json,null,2))}</pre></td><td><span class="nba-id">${r.nba}</span></td><td><span class="status ${r.tone}">${r.action}</span></td><td><b>${r.duration}</b></td></tr>`).join('')}</tbody></table></div></div>`}
function escapeSessionJson(value){return value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')}

function bindSessionData(){document.querySelectorAll('[data-session-trace]').forEach(link=>link.onclick=()=>{pendingTraceSessionId=link.dataset.sessionTrace;current='trace';document.querySelectorAll('.nav-item').forEach(item=>item.classList.toggle('active',item.dataset.page==='trace'));crumb.textContent='业务数据 / 会话追溯';render()})}



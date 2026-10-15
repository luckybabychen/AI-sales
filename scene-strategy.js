const sceneFieldRows=[
 {no:'01',name:'试用 / 下载 / 安装激活',required:['产品版本','操作系统','问题阶段'],suggested:['错误码','客户端版本','部署方式']},
 {no:'02',name:'需求发现与资格判断',required:['业务场景','核心诉求','企业规模'],suggested:['行业','现用系统','决策角色','预算范围']},
 {no:'03',name:'产品与版本推荐',required:['核心需求','使用规模','目标能力'],suggested:['意向版本','使用角色','采购时间']},
 {no:'04',name:'价格询问 → 配置澄清',required:['意向版本','账号数量','服务期限'],suggested:['开通时间','预算状态','服务范围']},
 {no:'05',name:'免费 / 试用 / 付费边界',required:['当前版本','咨询功能','使用目的'],suggested:['试用状态','预期周期','升级意向']},
 {no:'06',name:'试用 / 演示后跟进',required:['试用进度','反馈结果','待解决问题'],suggested:['决策时间','参与角色','下一步安排']},
 {no:'07',name:'技术问题解决',required:['问题现象','产品版本','使用环境'],suggested:['错误码','复现步骤','影响范围','紧急程度']},
 {no:'08',name:'价格 / 竞品 / 服务异议',required:['异议类型','关注重点','对比对象'],suggested:['预算差距','决策标准','期望方案']}
];
const boundaryRows=[
 ['B01','合同、签约与退款','涉及合同权利义务、签约确认、退款或赔偿结论时，不生成可直接执行的 NBA。'],
 ['B02','敏感承诺与利益事项','涉及保证效果、结果承诺、发票、回扣、佣金或其他需授权承诺的内容。'],
 ['B03','数据与权限安全','涉及客户数据泄露、跨权限查询、敏感信息披露或未授权数据处理。'],
 ['B04','未授权执行','要求 AI 直接发送消息、修改业务数据、签署协议或执行未经销售确认的操作。'],
 ['B05','知识不足或冲突','知识库无有效依据、引用已失效、多个知识版本冲突，无法形成可信建议。'],
 ['B06','低置信度或场景外','未命中既定销售场景，或综合置信度低于可生成阈值。']
];
function sceneStrategyPage(){return `<div class="page scene-strategy-page">${head('场景策略','统一查看各销售场景需要沉淀的业务字段，以及适用于所有场景的越界边界。')}<section><div class="detail-heading"><div><span>SCENE FIELDS</span><h2>场景字段</h2></div><em>${sceneFieldRows.length} 个首期场景</em></div><div class="scene-field-grid">${sceneFieldRows.map(s=>`<article class="scene-field-card card"><header><span>场景 ${s.no}</span><h3>${s.name}</h3></header><div class="field-section"><b>必要字段</b><div>${s.required.map(x=>`<span class="required-field">${x}</span>`).join('')}</div></div><div class="field-section suggested"><b>建议字段</b><div>${s.suggested.map(x=>`<span>${x}</span>`).join('')}</div></div></article>`).join('')}</div></section><section class="boundary-section"><div class="detail-heading"><div><span>GLOBAL GUARDRAILS</span><h2>统一越界条件</h2></div><em>命中后不生成可直接执行的 NBA，交由销售人工判断</em></div><div class="boundary-card card"><div class="boundary-summary"><span>安全边界</span><strong>${boundaryRows.length} 类</strong><p>全场景统一生效</p></div><div class="boundary-list">${boundaryRows.map(r=>`<article><span>${r[0]}</span><div><b>${r[1]}</b><p>${r[2]}</p></div><em>人工处理</em></article>`).join('')}</div></div></section></div>`}

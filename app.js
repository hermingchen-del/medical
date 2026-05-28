const planData = {
  // 新增虛擬醫令代碼
  VIRTUAL_CODE: {
    name: "虛擬醫令代碼",
    enrollment: "無 (不需收案條件)",
    tracking: "● R001：因處方箋遺失或毀損，提供切結文件，提前回診，且經院所查詢健保雲端藥歷系統，確定病人未領取所稱遺失或毀損處方之藥品。\n" +
              "● R002：因醫師請假因素，提前回診，醫事服務機構留存醫師請假證明資料備查。\n" +
              "● R003：經醫師專業認定需要改藥或調整藥品劑量或換藥者。\n" +
              "● R004：其他非屬 R001~R003 之提前回診或慢性病連續處方箋提前領取藥品或其他等病人因素，提供切結文件或於病歷中詳細記載原因備查。\n" +
              "● R005：民眾健保卡加密或其他健保卡問題致無法查詢健保雲端資訊，並於病歷中記載原因備查。\n" +
              "● R006：配合分級醫療政策，病人由醫院轉診至院所後第 1 次就醫，並符合轉診申報規定之案件。\n" +
              "● R007：病人因不可抗力或不可歸責之事由，致藥品遺失、損毀或無法使用(如配合衛福部食藥署公告藥品回收)，重新開立處方給病人，並於病歷中記載原因備查。\n" +
              "● R008：醫師查詢雲端或 API 系統提示病人有重複用藥情事，經向病人確認後排除未領藥紀錄，其餘藥天數小於(含)10 天開立處方，並於病歷中詳細記載原因備查。\n" +
              "● <span class='highlight-amber'>主治:H8</span>(持慢性病連續處方領藥,<span class='danger-text'>預定出國</span>,提供切結文件,一次領取2個月或3個月用藥量案件)。\n" +
              "● <span class='highlight-amber'>主治:HA</span>(持慢性病連續處方領藥,<span class='danger-text'>返回離島地區</span>,提供切結文件,一次領取2個月或3個月用藥量案件)。\n" +
              "● <span class='highlight-amber'>主治:HB</span>(持慢性病連續處方領藥,<span class='danger-text'>已出海為遠洋漁船作業船員</span>,提供切結 文件,一次領取2個月或3個月用藥量案件)。\n" +
              "● <span class='highlight-amber'>主治:HC</span>(持慢性病連續處方領藥,<span class='danger-text'>已出海為國際航線船舶作業船員</span>,提供 切結文件,一次領取2個月或3個月用藥案件)。\n" +
              "● <span class='highlight-amber'>主治:HD</span>(持慢性病連續處方領藥,<span class='danger-text'>罕見疾病病人</span>,提供切結文件,一次 領取2個月或3個月用藥案件) ",

    days: [] // 無天數按鈕
  },
  // 以下保留您原本的所有內容，不做任何更動
  DM: {
    name: "糖尿病 (DM)",
    enrollment: "90天內診斷≧2次<span class='danger-text'>(不含成健)</span>；\n(ICD-10: E08-E13)",
    tracking: "● 間隔：P1407C(初)→P1408C(複) ≧49天；後續 ≧70天 \n● 新案順序：P1407C(初) → P1408C(複) → P1408C(複) → P1409C(年) \n● 續案順序：P1408C(複) → P1408C(複) → P1408C(複) → P1409C(年) \n● P1409C：年度執行",
    days: [49, 70]
  },
  ASTHMA: {
    name: "氣喘試辦計畫",
    enrollment: "90天內<span class='danger-text'>同醫師</span>診斷≧2次(ICD-10-CM: J44-J45)；\n<span class='danger-text'>14歲以上需肺功能紀錄",
    tracking: "● 間隔：P1612C(初)→P1613C(複) ≧56天；後續 ≧80天 \n● 新案順序：P1612C(初) → P1613C(複) → P1613C(複) → P1615C(年) \n● 續案順序：P1613C(複) → P1613C(複) → P1613C(複) → P1615C(年) \n● P1615C：年度執行",
    days: [56, 80]
  },
  BCHEP: {
    name: "肝炎醫療給付改善方案",
    enrollment: " ●180天內診斷≧2次；\n 1 .B型肝炎帶原者及C型肝炎感染者:B16.1、B16.9、B17.10、 B18.0、B18.1、B18.2、B19.10、B19.20\n 2 .<span class='danger-text'>新增肝纖維化F3(含)以上之代謝性、酒精性肝炎病人: K70.-、K75.81、K76.0-</span>\n 3 .其他肝炎:K73.-、K74.60、K74.69、K75.4)",
    tracking: "● 間隔：P4201C(初) → P4202C(複) ≧ 70天；後續 ≧ 161天\n● 新案順序：P4201C(初) → P4202C(複)→ P4202C(複)(一年3次,包含初診)\n● 續案順序：P4202C(複) → P4202C(複)→ P4202C(複)(全年合計申報上限3次)",
    days: [70, 161]
  },
  CKD: {
    name: "慢性腎臟病 (CKD)",
    enrollment: "1. Stage 3A \n2. Stage 1-2 :UPCR≧150 mg/gm或糖尿病病患UACR≧30 mg/gm。\n (ICD-10:N16)\n3. (若eGFR ≦ 44.9 不能收)",
    tracking: "P4301C(初) → P4302C(複) ≧ 77天；後續 ≧ 161天",
    closing: "1. UPCR ≧ 1000 mg /gm\n2. eGFR < 45 ml/min /1.73 ㎡，應建議轉診至辦理「全民健康保險Pre-ESRD病人照護與衛教計畫」院所。",
    days: [77, 161]
  },
  METABOLIC: {
    name: "代謝症候群防治",
    enrollment: "20-69歲：<span class='danger-text'>(已收案 DM 或 CKD 者不可重複收案)</span> \n1. <span class='highlight-box'>可採收案日前 3 個月內檢驗(含成健)符合指標任三項</span>:\n   ● 腰圍：男≧90cm、女≧80cm 或 BMI≧27 \n   ● 血壓：SBP≧130mmHg 或 DBP≧85mmHg \n   ● 血糖：空腹血糖≧100mg/dL <span class='danger-text'>(新收案需加驗 HbA1c)</span> \n   ● 三酸甘油脂(TG)：≧150mg/dL \n   ● 高密度脂蛋白(HDL)：男<40mg/dL、女<50mg/dL \n2. <span class='highlight-box'>符合糖尿病前期者：HbA1c 5.7~6.4%</span> \n(ICD-10: E88.81) ",
    tracking: "● 間隔：P7501C(初)→P7502C(複) ≧70天；後續 ≧70天 \n● 新案順序：P7501C(初) → P7502C(複) → P7502C(複) →P7502C(複) → P7503C(年) \n● 續案順序：P7502C(複) → P7502C(複) → P7502C(複) → P7503C(年) \n● P7503C：年度執行",
    days: [70]
  },
  OPAT: {
    name: "門診靜脈抗生素治療 (OPAT)",
    enrollment: "符合下列任一適應症：\n1. 肺炎 (J12-J18) \n2. 尿路感染 (N10, N39.0)\n3. 軟組織感染 (L03) 等。",
    tracking: "● 39027C：每天注射1次 \n● 39028C：每天注射2次以上 \n● 39029：個案管理費(完成當次治療計畫方可申報，請於治療計畫完成日申報（因故中斷治療計畫者不得申報） \n<span class='danger-text'>● 中斷1天或者改變施打頻率,需重起療程(取新卡號)\n● <span class='danger-text'>注意：不可申報口服抗生素</span>",
    days: [5]
  },
  COPD: {
    name: "慢性阻塞性肺炎",
    enrollment: "90天內診斷≧2次；需有肺功能紀錄(J41-J44)。",
    tracking: "P6011C 後 ≧ 56天；每次建議 ≧ 80天",
    days: [56, 80]
  },
  CANCER: {
    name: "癌症治療改善計畫",
    enrollment: "篩檢陽性個案，確診並上傳 QC 結果。",
    tracking: "P7701~P7704: 30天內轉診 ",
    days: [30]
  },
  DKD: {
    name: "DKD (糖腎整合方案)",
    enrollment: "需為本診所之DM及CKD已收案對象",
    tracking: "P7001C → P7002C ≧ 70天",
    days: [70]
  },
  SMOKING: {
    name: "戒菸服務",
    enrollment: "<span class='danger-text'>1. 具健保身分，不分國籍，需年滿18歲\n2. 必須刷卡(卡序 7A~7T)",
    tracking: "● 醫令：E1027 (治療費)\n● 開藥週數：\n  1. 初診：以 1-2 週為原則 (後續療程或特定因素最多開 4 週)\n  2. 複診：視成癮度及症狀，最多開 4 週\n● 合併用藥 (同意補助組合)：\n  1. 貼片(長效):ST10、ST20 + 單一短效尼古丁:NICO4\n  2. Bupropion + 單一或合併尼古丁\n  [※ Varenicline(Champix)之合併用藥或合併使用3項以上尼古丁不予補助]",
    closing: "1. 每一療程應於 90 日內完成,逾 90 日者起算另一療程\n2. 一年最多兩個療程",
    days: [90]
  }
};

// UI 元素
const programSelect = document.getElementById('programSelect');
const infoDisplay = document.getElementById('infoDisplay');
const btnGroup = document.getElementById('btnGroup');
const dateResult = document.getElementById('dateResult');
const copyBtn = document.getElementById('copyBtn');
const calcSection = document.getElementById('calcSection'); // 新增控制區塊
const yearIn = document.getElementById('yearY');
const monthIn = document.getElementById('monthM');
const dayIn = document.getElementById('dayD');

// 初始化民國日
function initCurrentDate() {
  const today = new Date();
  yearIn.value = today.getFullYear() - 1911;
  monthIn.value = (today.getMonth() + 1).toString().padStart(2, '0');
  dayIn.value = today.getDate().toString().padStart(2, '0');
}
initCurrentDate();

// 切換計畫
programSelect.addEventListener('change', () => {
  const key = programSelect.value;

  // 1. 處理試算區塊顯示邏輯
  if (key === 'VIRTUAL_CODE') {
    calcSection.style.display = 'none'; // 隱藏試算與複製功能
  } else {
    calcSection.style.display = 'block'; // 其他計畫則恢復顯示
  }

  if (!key) { 
    infoDisplay.innerHTML = ''; 
    btnGroup.innerHTML = ''; 
    return; 
  }

  const plan = planData[key];
  let htmlContent = `
    <div class="info-card">
      <div class="tag">收案條件</div>
      <p style="white-space: pre-wrap;">${plan.enrollment}</p>`;

  // 原有 CKD UACR 工具邏輯
  if (key === 'CKD') {
    htmlContent += `
      <div class="uacr-inner-tool">
        <div class="tag" style="background: #edf2f7; color: #4a5568; font-size: 0.9em;">🧪 UACR 快速試算</div>
        <div class="uacr-row">
          <label>Urine microalbumin(mg/L):</label><input type="number" id="albIn" placeholder="例如 86.1">
          <label>Urine creatinine(mg/dL):</label><input type="number" id="creIn" placeholder="例如 155">
          <button id="calcUacrBtn" class="uacr-calc-btn">計算</button>
        </div>
        <div id="uacrResultInner" class="uacr-res-text">結果: -- mg/gm</div>
        <div id="uacrStatusPrompt" class="uacr-status-prompt"></div>
      </div>`;
  }

  const trackingLabel = (key === 'OPAT') ? "申報規則:(原則上連續不間斷5天)" : "追蹤/藥物規則";
  htmlContent += `
      <div class="tag">${trackingLabel}</div>
      <p style="white-space: pre-wrap;">${plan.tracking}</p>`;
  
  if (plan.closing) { 
    htmlContent += `<div class="tag danger">結案/療程規定</div><p class="closing-text" style="white-space: pre-wrap;">${plan.closing}</p>`; 
  }
  htmlContent += `</div>`;
  infoDisplay.innerHTML = htmlContent;

  // 原有 CKD 按鈕點擊邏輯
  if (key === 'CKD') {
    document.getElementById('calcUacrBtn').onclick = () => {
      const alb = parseFloat(document.getElementById('albIn').value);
      const cre = parseFloat(document.getElementById('creIn').value);
      if (alb && cre && cre !== 0) {
        const res = (alb / cre) * 100;
        const resBox = document.getElementById('uacrResultInner');
        const statusBox = document.getElementById('uacrStatusPrompt');
        resBox.innerText = `結果: ${res.toFixed(1)} mg/g`;
        if (res >= 30) {
          statusBox.innerText = "● 符合 CKD 收案標準 (UACR≧ 30 mg/g)";
          statusBox.style.color = "#c53030";
        } else {
          statusBox.innerText = "○ 未達 CKD 收案標準 (UACR< 30 mg/g)";
          statusBox.style.color = "#2d3748";
        }
      } else { alert("請輸入正確數值 (肌酸酐不可為0)"); }
    };
  }
  
  // 原有渲染日期按鈕邏輯
  btnGroup.innerHTML = '';
  plan.days.forEach(day => {
    const btn = document.createElement('button');
    btn.innerText = `+${day} 天`;
    btn.onclick = () => calculateDate(day);
    btnGroup.appendChild(btn);
  });
});

// 原有日期試算核心邏輯
function calculateDate(addDays) {
  const y = parseInt(yearIn.value);
  const m = parseInt(monthIn.value) - 1;
  const d = parseInt(dayIn.value);
  if (!y || !monthIn.value || !dayIn.value) { alert("請輸入民國年月日"); return; }
  const date = new Date(y + 1911, m, d);
  date.setDate(date.getDate() + addDays);
  const resY = date.getFullYear() - 1911;
  const resM = (date.getMonth() + 1).toString().padStart(2, '0');
  const resD = date.getDate().toString().padStart(2, '0');
  const dayNames = ['日', '一', '二', '三', '四', '五', '六'];
  dateResult.innerText = `${resY}-${resM}-${resD}(星期${dayNames[date.getDay()]})`;
}

// 原有複製邏輯
copyBtn.onclick = () => {
  const text = dateResult.innerText;
  if (text.includes('-')) {
    navigator.clipboard.writeText(text);
    alert("已複製日期: " + text);
  } else { alert("請先計算日期"); }
};
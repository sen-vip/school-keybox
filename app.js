// ============================================================
// 우리학교 키박스 v3.1.16 — CSS 구조 정리
// 기능 100% 동일. 미사용 함수 제거 + 중복 핸들러 통합
// ============================================================

const STORAGE_KEY = "hakdolSchoolKeyboxV30";

const DEFAULT_INFO = {
  "school": [
    [
      "학교 메일",
      "school@sen.go.kr"
    ],
    [
      "사업자등록번호",
      "120-00-00000"
    ],
    [
      "학교 기관코드",
      "1234567"
    ],
    [
      "나이스 조직코드",
      "B100000000"
    ],
    [
      "특수목적 인증서(메일)",
      "••••••••"
    ],
    [
      "전자관인 인증서",
      "••••••••"
    ],
    [
      "학교장터 인증서",
      "••••••••"
    ],
    [
      "e알리미 ID",
      "hakdol"
    ],
    [
      "e알리미 PW",
      "••••••••"
    ],
    [
      "학교공유폴더 ID",
      "hakdol"
    ],
    [
      "학교공유폴더 PW",
      "••••••••"
    ],
    [
      "와이파이 PW",
      "••••••••"
    ],
    [
      "쿨메신저 PW",
      "••••••••"
    ]
  ],
  "bank": [
    [
      "학교회계계좌",
      "••••••••"
    ],
    [
      "카드계좌",
      "••••••••"
    ],
    [
      "세외계좌",
      "••••••••"
    ],
    [
      "계좌PW",
      "••••"
    ],
    [
      "은행인증서(실장)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••••"
    ],
    [
      "은행인증서(지출)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••••"
    ],
    [
      "은행인증서(세입)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••••"
    ],
    [
      "은행인증서(급여)",
      "••••••••"
    ],
    [
      "ㄴ자금이체 PW",
      "••••••••"
    ]
  ],
  "card": [
    [
      "BC카드 결제 PW",
      "••••"
    ],
    [
      "카드결제 인증서",
      "••••••••"
    ],
    [
      "기관카드 온라인(비싼물건)",
      "••••••••"
    ],
    [
      "기관카드 1",
      "1234-0000-1234-0000"
    ],
    [
      "기관카드 2",
      "1234-0000-1234-0001"
    ],
    [
      "기관카드 3",
      "1234-0000-1234-0002"
    ],
    [
      "기관카드 4",
      "1234-0000-1234-0003"
    ],
    [
      "기관카드 5",
      "1234-0000-1234-0004"
    ],
    [
      "기관카드 6",
      "1234-0000-1234-0005"
    ],
    [
      "기관카드 7",
      "1234-0000-1234-0006"
    ],
    [
      "기관카드 8",
      "1234-0000-1234-0007"
    ],
    [
      "기관카드 9",
      "1234-0000-1234-0008"
    ]
  ]
};

const DEFAULT_ACCOUNTS = [
  {
    "category": "기타",
    "site": "나라장터",
    "id": "개인인증서",
    "password": "개인인증서 비번",
    "memo": "G2B, 조달청",
    "url": "https://www.g2b.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교장터",
    "id": "school",
    "password": "12345678",
    "memo": "S2B, 인증서: oooo",
    "url": "https://www.s2b.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "지마켓",
    "id": "school",
    "password": "12345678",
    "memo": "G마켓, 새벽배송 불가",
    "url": "https://www.gmarket.co.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "11번가",
    "id": "school",
    "password": "12345678",
    "memo": "",
    "url": "https://www.11st.co.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "알라딘",
    "id": "school",
    "password": "••••••••",
    "memo": "",
    "url": "https://www.aladin.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "예스24",
    "id": "school",
    "password": "••••••••",
    "memo": "YES24",
    "url": "https://www.yes24.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "SSG닷컴",
    "id": "school",
    "password": "••••••••",
    "memo": "SSG.com, 에스에스지닷컴, 새벽배송 불가(자동취소됨)",
    "url": "https://www.ssg.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "다이소몰",
    "id": "school",
    "password": "••••••••",
    "memo": "BIZ 로그인",
    "url": "https://www.daisomall.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "롯데마트",
    "id": "school",
    "password": "••••••••",
    "memo": "ZETTA(제타플렉스)",
    "url": "https://www.lotteon.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "에이블마켓",
    "id": "school",
    "password": "••••••••",
    "memo": "able market, 서울시립 장애인생산품판매시설, 중증장애인생산품",
    "url": "https://www.ablemarket.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "꿈드래쇼핑몰",
    "id": "school",
    "password": "••••••••",
    "memo": "중증장애인생산품",
    "url": "https://www.goods.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "티처빌",
    "id": "school",
    "password": "••••••••",
    "memo": "티처몰, 체더스",
    "url": "https://www.teacherville.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "오피스안",
    "id": "school",
    "password": "••••••••",
    "memo": "과학실 물품",
    "url": "https://www.officeahn.co.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "스마일몰",
    "id": "school",
    "password": "••••••••",
    "memo": "스마일보건, 보건실 물품",
    "url": "https://www.smilebogun.org",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "HK마트",
    "id": "school",
    "password": "••••••••",
    "memo": "에이치케이마트, 급식실 물품",
    "url": "https://www.hkmart.co.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "농협뱅킹",
    "id": "school",
    "password": "••••••••",
    "memo": "NH뱅킹",
    "url": "https://banking.nonghyup.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "홈택스",
    "id": "school",
    "password": "••••••••",
    "memo": "HomeTax, 인증서: oooo",
    "url": "https://www.hometax.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "국민연금",
    "id": "인증서",
    "password": "••••••••",
    "memo": "4대보험",
    "url": "https://edi.nps.or.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "건강보험",
    "id": "인증서",
    "password": "••••••••",
    "memo": "4대보험",
    "url": "https://www.nhis.or.kr/nhis/index.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "고용산재보험",
    "id": "인증서",
    "password": "••••••••",
    "memo": "4대보험",
    "url": "https://total.comwel.or.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "비씨카드",
    "id": "school",
    "password": "••••••••",
    "memo": "BC카드",
    "url": "https://www.bccard.com",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "농협카드",
    "id": "school",
    "password": "12345678",
    "memo": "인증서: oooo",
    "url": "https://card.nonghyup.com",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "NeaT (급식조달)",
    "id": "school",
    "password": "12345678",
    "memo": "공공급식전자조달시스템, 인증서: oooo",
    "url": "https://neat.at.or.kr",
    "favorite": true
  },
  {
    "category": "기타",
    "site": "금융결제원",
    "id": "school",
    "password": "••••••••",
    "memo": "CMS, 이용기관 로그인",
    "url": "https://www.cmsedi.or.kr/cms/auth/signin",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "온비드",
    "id": "school",
    "password": "••••••••",
    "memo": "인증서: oooo",
    "url": "https://www.onbid.co.kr/op/meminf/lgnmng/prtllgn/PrtlLgnController/main.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "공공구매정보망",
    "id": "school",
    "password": "••••••••",
    "memo": "SMPP, 공공구매종합정보망, 직접생산 확인, 중소기업 확인",
    "url": "https://www.smpp.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "올바로시스템",
    "id": "school",
    "password": "••••••••",
    "memo": "폐기물 처리",
    "url": "https://www.allbaro.or.kr/index.jsp",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "한전",
    "id": "school",
    "password": "••••••••",
    "memo": "한전ON, 파워플래너, 전기요금·전력사용현황 조회, 고객번호:",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "도시가스",
    "id": "school",
    "password": "••••••••",
    "memo": "",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "상하수도",
    "id": "school",
    "password": "••••••••",
    "memo": "관할수도사업소",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "승강기정보센터",
    "id": "school",
    "password": "••••••••",
    "memo": "승강기점검 확인",
    "url": "https://www.elevator.go.kr/opn/MainPage.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "전기안전 여기로",
    "id": "school",
    "password": "••••••••",
    "memo": "한국전기안전공사(KESCO), 전기안전점검 검사 등",
    "url": "https://safety.kesco.or.kr/cyber/index.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "교육시설통합",
    "id": "-",
    "password": "개인인증서 사용",
    "memo": "KEIIS, 교육시설통합정보망",
    "url": "https://work.keiis.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "시설물통합",
    "id": "school",
    "password": "••••••••",
    "memo": "FMS, 시설물통합정보시스템",
    "url": "https://www.fms.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "교육시설공제",
    "id": "school",
    "password": "••••••••",
    "memo": "KOEIS, 매년 11월 정기 가입(한국교육시설안전원)",
    "url": "https://edu.koies.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교안전공제회",
    "id": "school",
    "password": "••••••••",
    "memo": "사고 접수, 학교안전사고보상지원시스템",
    "url": "https://www.schoolsafe.or.kr/school/login.do",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "학교재난상황관리",
    "id": "school",
    "password": "••••••••",
    "memo": "",
    "url": "https://disaster.schoolsafe.kr/login",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "중증장애인생산품우선구매관리시스템",
    "id": "school",
    "password": "••••••••",
    "memo": "의무구매 실적 집계용(부서 성과평가), 매년 1회 확인 처리",
    "url": "",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "인증신제품",
    "id": "school",
    "password": "••••••••",
    "memo": "NEP, 구매 계획 제출, 매년 1월경 공문 처리, 설치 프로그램",
    "url": "https://www.nepmark.or.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "에코스퀘어",
    "id": "school",
    "password": "••••••••",
    "memo": "녹색구매",
    "url": "https://ecosq.or.kr/",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 입학준비금",
    "id": "school",
    "password": "••••••••",
    "memo": "진학어플라이",
    "url": "https://sen.jinhakapply.com/PublicAdmin/Account/Login.aspx",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 목적사업비 정산시스템",
    "id": "school",
    "password": "••••••••",
    "memo": "",
    "url": "https://mokjeok.sen.go.kr",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 산업안전보건",
    "id": "school",
    "password": "••••••••",
    "memo": "상,하반기 안전보건 의무이행 점검 및 관리감독자 평가 결과 제출",
    "url": "https://sen.maot.co.kr/login",
    "favorite": false
  },
  {
    "category": "기타",
    "site": "[서울] 서울시학교안전공제회",
    "id": "담당자 개인인증",
    "password": "",
    "memo": "여행자동행공제",
    "url": "https://www.ssia.or.kr",
    "favorite": false
  }
];

// ============================================================
// Deep cloning helper
// 일부 브라우저(Safari ≤ 14 등)에서 structuredClone()을 지원하지 않을 수 있어
// 존재 여부를 검사하고, 지원하지 않는 경우 JSON 직렬화/역직렬화 방식으로 대체합니다.
const deepClone = typeof structuredClone === 'function'
  ? (obj) => structuredClone(obj)
  : (obj) => JSON.parse(JSON.stringify(obj));

// ============================================================
// 상태 관리
// ============================================================
function normalizeAccountDefaults(accounts) {
  return (accounts || [])
    .filter(a => String(a.site || "").trim() && !["…", "..."].includes(String(a.site || "").trim()))
    .map(a => ({
      category: a.category || "기타",
      site: normalizeSiteName(a.site || ""),
      id: a.id || "",
      password: a.password || "",
      memo: a.memo || "",
      url: a.url || "",
      favorite: a.favorite === true
    }));
}

let state = { info: deepClone(DEFAULT_INFO), accounts: normalizeAccountDefaults(deepClone(DEFAULT_ACCOUNTS)) };
let pwMode = "plain";
let deleteMode = { info: {}, account: {} };
let draggedIndex = null;
let accountSearchTerm = "";

// ============================================================
// 마스킹 / 표시
// ============================================================
const NO_MASK_LABELS = ["학교 메일", "사업자등록번호", "학교 기관코드", "나이스 조직코드", "와이파이PW", "와이파이 PW"];

function shouldMaskByLabel(label) {
  const normalized = String(label || "").replace(/\s+/g, "").toLowerCase();
  return !NO_MASK_LABELS.some(x => String(x).replace(/\s+/g, "").toLowerCase() === normalized);
}
function maskPw(v) {
  if (!v) return "";
  const text = String(v);
  if (text.includes("개인인증서") || text.includes("별도") || text === "-") return text;
  return "••••••••";
}
function displayPw(v) {
  return pwMode === "mask" ? maskPw(String(v || "")) : String(v || "");
}
function displayInfoValue(label, value) {
  if (pwMode !== "mask" || !shouldMaskByLabel(label)) return String(value || "");
  return maskPw(String(value || ""));
}
function inputTypeForLabel(label) {
  return pwMode === "mask" && shouldMaskByLabel(label) ? "password" : "text";
}
function normalizeSiteName(name) {
  return String(name || "")
    .replace("중증장애인생산품 우선구매관리시스템(꿈드래)", "중증장애인생산품우선구매관리시스템")
    .replace("꿈드래(중증장애인 우선구매)", "중증장애인생산품우선구매관리시스템");
}

// ============================================================
// 유틸
// ============================================================
function esc(s) {
  return String(s ?? "").replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ============================================================
// 검색
// ============================================================
function normalizeSearchText(v) {
  return String(v || "").toLowerCase().replace(/\s+/g, "");
}
function accountMatchesSearch(item, term) {
  if (!term) return true;
  const haystack = normalizeSearchText([item.category, item.site, item.id, item.password, item.memo, item.url].join(" "));
  return haystack.includes(normalizeSearchText(term));
}
function infoRowMatchesSearch(label, value, term) {
  if (!term) return true;
  const haystack = normalizeSearchText([label, value].join(" "));
  return haystack.includes(normalizeSearchText(term));
}

// ============================================================
// 즐겨찾기 / 빠른복사
// ============================================================
function hasCopyableValue(v) {
  const text = String(v || "").trim();
  return !!text && text !== "-" && text !== "••••••••" && text !== "••••";
}
function getQuickAccounts() {
  return state.accounts
    .map((item, idx) => ({...item, idx}))
    .filter(item => item.favorite && (hasCopyableValue(item.id) || hasCopyableValue(item.password)));
}
function toggleFavorite(idx) {
  syncInputs();
  if (!state.accounts[idx]) return;
  state.accounts[idx].favorite = !state.accounts[idx].favorite;
  render();
  showToast(state.accounts[idx].favorite ? "빠른복사에 추가했어요." : "빠른복사에서 뺐어요.");
}

// ============================================================
// 복사
// ============================================================
async function copyText(value, label = "값") {
  const text = String(value || "");
  if (!text.trim()) return showToast("복사할 내용이 없어요.");
  try {
    await navigator.clipboard.writeText(text);
    showToast(`${label} 복사 완료`);
  } catch (err) {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    showToast(`${label} 복사 완료`);
  }
}
function copyAccountField(idx, field) {
  syncInputs();
  const item = state.accounts[idx];
  if (!item) return;
  copyText(item[field], field === "id" ? "아이디" : field === "password" ? "비밀번호" : "값");
}
function openAccountUrl(idx) {
  syncInputs();
  const item = state.accounts[idx];
  const raw = String(item?.url || "").trim();
  if (!raw) return showToast("등록된 URL이 없어요. 엑셀의 URL 칸에 입력해 주세요.");
  const url = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

// ============================================================
// 사이트 뱃지
// ============================================================
function badgeText(name) {
  const raw = String(name || "?").trim().replace(/^[^가-힣A-Za-z0-9]+/, "");
  if (!raw) return "?";
  let out = "";
  let units = 0;
  for (const ch of raw) {
    if (/\s/.test(ch) || ch === "(" || ch === "/") break;
    const isAscii = /^[A-Za-z0-9]$/.test(ch);
    const cost = isAscii ? 1 : 2;
    if (units + cost > 2) break;
    out += isAscii ? ch.toUpperCase() : ch;
    units += cost;
    if (units >= 2) break;
  }
  return out || raw[0] || "?";
}

// ============================================================
// 정보 카드 렌더
// ============================================================
function normalizeInfoSchema() {
  const rows = state.info.school || [];
  const next = [];
  rows.forEach(([label, value]) => {
    const name = String(label || "");
    const val = String(value || "");
    if ((name === "가통서비스" || name === "학교공유폴더") && val.includes("/")) {
      const [id, pw] = val.split("/");
      next.push([`${name} ID`, id || ""]);
      next.push([`${name} PW`, pw || ""]);
    } else {
      next.push([label, value]);
    }
  });
  state.info.school = next;
}

function renderInfoCards() {
  normalizeInfoSchema();
  const cards = [
    ["school", "🏫 학교 정보", state.info.school, "wide", "schoolInfo"],
    ["bank", "🏦 은행 계좌 정보", state.info.bank, "half", "bankInfo"],
    ["card", "💳 결제 수단", state.info.card, "half", "cardInfo"]
  ];

  function renderInfoRow(key, label, value, idx, deleting) {
    return `
      <div class="info-row editable-row ${deleting ? 'selecting' : ''}">
        ${deleting ? `<label class="select-cell no-print"><input type="checkbox" data-info-select="${esc(key)}" data-idx="${idx}" aria-label="삭제할 행 선택" /></label>` : ''}
        <input class="label-input" title="${esc(label)}" value="${esc(label)}" data-info-label-key="${esc(key)}" data-info-idx="${idx}" aria-label="항목명 입력" />
        <div class="copy-cell info-copy-cell">
          <input class="inline-input" title="${esc(displayInfoValue(label, value))}" type="${inputTypeForLabel(label)}" value="${esc(value)}" data-info-key="${esc(key)}" data-info-idx="${idx}" aria-label="${esc(label)} 값 입력" />
          <button class="copy-pill copy-icon-only no-print" onclick="copyText(document.querySelector('[data-info-key=${esc(key)}][data-info-idx=\\'${idx}\\']').value, '${esc(label)}')" type="button" title="복사하기" aria-label="${esc(label)} 복사">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M5 15V7a2 2 0 0 1 2-2h8"></path></svg>
          </button>
        </div>
      </div>
    `;
  }

  function renderInfoRows(key, rows, deleting) {
    return rows.map(([label, value], idx) => renderInfoRow(key, label, value, idx, deleting)).join("");
  }

  function renderSchoolGrid(rows, deleting) {
    const left = rows.slice(0, 7).map(([label, value], idx) =>
      renderInfoRow("school", label, value, idx, deleting)).join("");
    const right = rows.slice(7, 14).map(([label, value], localIdx) =>
      renderInfoRow("school", label, value, localIdx + 7, deleting)).join("");
    const extra = rows.slice(14).map(([label, value], localIdx) =>
      renderInfoRow("school", label, value, localIdx + 14, deleting)).join("");

    return `
      <div class="school-column school-column-left">${left}</div>
      <div class="school-column school-column-right">${right}</div>
      ${extra ? `<div class="school-extra">${extra}</div>` : ""}
    `;
  }

  document.getElementById("infoCards").innerHTML = cards.map(([key, title, rows, span, anchorId]) => {
    const deleting = !!deleteMode.info[key];
    const visualClass = key === "card" ? "info-pay" : `info-${key}`;

    const filteredRows = accountSearchTerm
      ? rows.filter(([label, value]) => infoRowMatchesSearch(label, value, accountSearchTerm))
      : rows;

    const noResultHtml = accountSearchTerm && filteredRows.length === 0
      ? `<div class="section-no-result">이 섹션에는 검색 결과가 없습니다.</div>`
      : "";

    const gridBody = filteredRows.length > 0
      ? renderInfoRows(key, filteredRows, deleting)
      : "";

    return `
    <article id="${esc(anchorId)}" class="info-card ${visualClass} ${span} ${deleting ? 'delete-mode' : ''}">
      <div class="info-card-head no-print-control">
        <div>
          <h2>${esc(title)}</h2>
          <p class="info-sub">${accountSearchTerm ? `${filteredRows.length} / ${rows.length}개 항목` : `${rows.length}개 항목`}</p>
        </div>
        <div class="mini-actions no-print">
          <button class="small-btn add-inline" onclick="addInfoRow('${esc(key)}')">+ 행 추가</button>
          <button class="small-btn delete-mode-btn ${deleting ? 'active' : ''}" onclick="toggleInfoDelete('${esc(key)}')">- 행 삭제</button>
        </div>
      </div>
      <div class="info-grid ${key === 'school' ? 'school-grid' : ''}">
        ${gridBody}${noResultHtml}
      </div>
    </article>`;
  }).join("");
}

// ============================================================
// 빠른복사 렌더
// ============================================================
function quickSiteLabel(name) {
  const text = String(name || "").trim();
  if (text.length <= 14) return text;
  const cut = text.slice(0, 13).replace(/[\s(（]+$/g, "");
  return `${cut}...`;
}

function renderQuickAccounts() {
  const el = document.getElementById("quickAccounts");
  if (!el) return;
  const allQuick = getQuickAccounts();

  const quick = accountSearchTerm
    ? allQuick.filter(item => accountMatchesSearch(item, accountSearchTerm))
    : allQuick;

  const countEl = document.getElementById("quickCount");
  if (countEl) countEl.textContent = accountSearchTerm
    ? `${quick.length} / ${allQuick.length}개 항목`
    : `${allQuick.length}개 항목`;

  if (allQuick.length === 0) {
    el.innerHTML = `<div class="empty-mini quick-empty-state"><strong>즐겨찾기한 항목이 여기에 표시돼요.</strong><span>자주 쓰는 사이트 계정의 ☆를 눌러 빠른복사에 추가하세요.</span></div>`;
    return;
  }
  if (accountSearchTerm && quick.length === 0) {
    el.innerHTML = `<div class="empty-mini section-no-result">이 섹션에는 검색 결과가 없습니다.</div>`;
    return;
  }
  el.innerHTML = quick.map(item => `
    <article class="quick-item">
      <button class="quick-star on" onclick="toggleFavorite(${item.idx})" title="빠른복사에서 빼기" type="button">★</button>

      <div class="site-label quick-site-label">
        <div><strong title="${esc(item.site)}">${esc(quickSiteLabel(item.site))}</strong></div>
      </div>

      <div class="quick-actions">
        <button class="copy-btn" onclick="copyAccountField(${item.idx}, 'id')">ID</button>
        <button class="copy-btn" onclick="copyAccountField(${item.idx}, 'password')">PW</button>
      </div>
    </article>
  `).join("");
}

// ============================================================
// 검색 결과 안내
// ============================================================
function updateSearchResultInfo(filteredCount) {
  const infoEl = document.getElementById("searchResultInfo");
  if (!infoEl) return;
  if (!accountSearchTerm) {
    infoEl.textContent = "";
    infoEl.className = "search-result-info";
    return;
  }
  if (filteredCount === 0) {
    infoEl.innerHTML = `"${esc(accountSearchTerm)}"에 대한 검색 결과가 없습니다.<br><span class="search-hint">검색어를 줄이거나 다른 단어로 검색해보세요.</span>`;
    infoEl.className = "search-result-info no-result";
  } else {
    infoEl.textContent = `"${accountSearchTerm}" 검색 결과 ${filteredCount}개`;
    infoEl.className = "search-result-info has-result";
  }
}

function updateClearBtnState() {
  const clearBtn = document.getElementById("clearSearchBtn");
  const xBtn = document.getElementById("searchXBtn");
  const hasValue = !!accountSearchTerm;
  if (clearBtn) {
    clearBtn.disabled = !hasValue;
    clearBtn.classList.toggle("disabled", !hasValue);
  }
  if (xBtn) {
    xBtn.classList.toggle("dimmed", !hasValue);
  }
}

// ============================================================
// 사이트 계정 표 렌더
// ============================================================
function renderAccounts() {
  const filteredAccounts = state.accounts
    .map((item, idx) => ({...item, idx}))
    .filter(item => accountMatchesSearch(item, accountSearchTerm));

  document.getElementById("rowCount").textContent = accountSearchTerm
    ? `${filteredAccounts.length} / ${state.accounts.length}개 항목`
    : `${state.accounts.length}개 항목`;
  renderQuickAccounts();
  updateSearchResultInfo(filteredAccounts.length);
  updateClearBtnState();

  const deleting = !!deleteMode.account.__all__;
  const showMove = false; // v3.1.7: 순서 변경 핸들은 평소 화면에서 숨김
  const html = `
    <div class="account-list ${deleting ? 'delete-mode' : ''}" role="list">
      ${filteredAccounts.map(item => `
        <article class="account-row-card" role="listitem" ${showMove ? `draggable="true" ondragstart="dragStart(event, ${item.idx})" ondragover="dragOver(event)" ondrop="dropRow(event, ${item.idx})"` : ''} data-idx="${item.idx}">
          <div class="account-row-head">
            ${deleting ? `<label class="select-cell account-select no-print"><input type="checkbox" data-account-select="${item.idx}" aria-label="삭제할 행 선택" /></label>` : ''}
            <button class="star-btn account-star no-print ${item.favorite ? 'on' : ''}" onclick="toggleFavorite(${item.idx})" title="빠른복사 ${item.favorite ? '해제' : '추가'}" type="button">${item.favorite ? '★' : '☆'}</button>
            <div class="site-label account-site-label">
              <div class="site-texts">
                <div class="site-main-line">
                  <input class="table-input site-input account-site-input" title="${esc(item.site)}" value="${esc(item.site)}" data-account-idx="${item.idx}" data-field="site" aria-label="사이트명 입력" />
                  ${String(item.url || "").trim() ? `<button class="open-url-btn no-print" onclick="openAccountUrl(${item.idx})" title="사이트 열기" type="button">↗ 열기</button>` : ""}
                </div>
                <div class="account-meta-line">
                  <textarea class="table-input memo-sub account-memo-input" title="${esc(item.memo)}" data-account-idx="${item.idx}" data-field="memo" aria-label="메모 입력" rows="1" placeholder="메모">${esc(item.memo)}</textarea>
                </div>
              </div>
            </div>
            ${showMove ? '<button class="drag-handle account-drag no-print" title="끌어서 순서 변경" type="button">☰</button>' : ''}
          </div>

          <div class="credential-stack">
            <section class="credential-row">
              <div class="credential-label">아이디</div>
              <input class="table-input credential-input" title="${esc(item.id)}" value="${esc(item.id)}" data-account-idx="${item.idx}" data-field="id" aria-label="아이디 입력" />
              <button class="copy-chip credential-copy no-print" onclick="copyAccountField(${item.idx}, 'id')" title="아이디 복사" type="button">복사</button>
            </section>

            <section class="credential-row">
              <div class="credential-label">비밀번호</div>
              <input class="table-input credential-input" title="${esc(item.password)}" type="text" value="${esc(item.password)}" data-account-idx="${item.idx}" data-field="password" aria-label="비밀번호 입력" />
              <button class="copy-chip credential-copy no-print" onclick="copyAccountField(${item.idx}, 'password')" title="비밀번호 복사" type="button">복사</button>
            </section>
          </div>
        </article>`).join("")}
    </div>`;
  document.getElementById("accountGroups").innerHTML = filteredAccounts.length ? html
    : accountSearchTerm
      ? `<div class="empty section-no-result">이 섹션에는 검색 결과가 없습니다.</div>`
      : `<div class="empty">등록된 사이트 계정이 없어요.</div>`;
  resizeMemoAreas();
}

function resizeMemoArea(el) {
  if (!el) return;
  el.style.height = "auto";
  el.style.height = `${el.scrollHeight}px`;
}
function resizeMemoAreas() {
  document.querySelectorAll("textarea.memo-sub").forEach(resizeMemoArea);
}

function render() {
  renderAccounts();
  renderInfoCards();
}

// ============================================================
// 입력 동기화
// ============================================================
function updateFromInput(target) {
  if (target.dataset.infoLabelKey) {
    const key = target.dataset.infoLabelKey;
    const idx = Number(target.dataset.infoIdx);
    if (state.info[key] && state.info[key][idx]) state.info[key][idx][0] = target.value;
    return;
  }
  if (target.dataset.infoKey) {
    const key = target.dataset.infoKey;
    const idx = Number(target.dataset.infoIdx);
    if (state.info[key] && state.info[key][idx]) state.info[key][idx][1] = target.value;
    return;
  }
  if (target.dataset.accountIdx) {
    const idx = Number(target.dataset.accountIdx);
    const field = target.dataset.field;
    if (state.accounts[idx] && field) state.accounts[idx][field] = target.value;
  }
}
function syncInputs() {
  document.querySelectorAll(".inline-input, .table-input, .label-input").forEach(updateFromInput);
}
document.addEventListener("input", e => {
  if (e.target.matches(".inline-input, .table-input, .label-input")) {
    updateFromInput(e.target);
    if (e.target.matches("textarea.memo-sub")) resizeMemoArea(e.target);
  }
});

// ============================================================
// 행 추가/삭제
// ============================================================
function addInfoRow(key) {
  syncInputs();
  if (!state.info[key]) state.info[key] = [];
  state.info[key].push(["새 항목", ""]);
  render();
  showToast("행을 추가했어요. 입력 후 브라우저에 저장을 눌러주세요.");
}

function toggleInfoDelete(key) {
  syncInputs();
  if (!deleteMode.info[key]) {
    deleteMode.info[key] = true;
    render();
    showToast("삭제할 행을 선택한 뒤 다시 - 행 삭제를 눌러주세요.");
    return;
  }
  const selected = [...document.querySelectorAll(`input[data-info-select="${CSS.escape(key)}"]:checked`)].map(x => Number(x.dataset.idx));
  if (!selected.length) {
    deleteMode.info[key] = false;
    render();
    return;
  }
  if (!confirm("선택한 행을 삭제할까요?")) return;
  state.info[key] = state.info[key].filter((_, idx) => !selected.includes(idx));
  deleteMode.info[key] = false;
  render();
  showToast("선택한 행을 삭제했어요. 보관하려면 브라우저에 저장을 눌러주세요.");
}

// 사이트 계정 삭제 모드: 카테고리 구분 없이 전체("__all__")에 대해 동작
// (인자는 HTML 호환성을 위해 유지하지만 사용하지 않음)
function toggleAccountDelete() {
  syncInputs();
  const category = "__all__";
  if (!deleteMode.account[category]) {
    deleteMode.account[category] = true;
    render();
    showToast("삭제할 행을 선택한 뒤 다시 - 행 삭제를 눌러주세요.");
    return;
  }
  const selected = [...document.querySelectorAll('input[data-account-select]:checked')].map(x => Number(x.dataset.accountSelect));
  if (!selected.length) {
    deleteMode.account[category] = false;
    render();
    return;
  }
  if (!confirm("선택한 행을 삭제할까요?")) return;
  state.accounts = state.accounts.filter((_, idx) => !selected.includes(idx));
  deleteMode.account[category] = false;
  render();
  showToast("선택한 행을 삭제했어요. 보관하려면 브라우저에 저장을 눌러주세요.");
}

function addRowToCategory(category) {
  syncInputs();
  state.accounts.push({ category: category || "기타", site:"", id:"", password:"", memo:"", url:"", favorite:false });
  render();
  showToast("행을 추가했어요. 입력 후 브라우저에 저장을 눌러주세요.");
}
function addRow() {
  addRowToCategory("기타");
}

// ============================================================
// 드래그 앤 드롭 (행 순서 변경)
// ============================================================
function dragStart(event, idx) {
  syncInputs();
  draggedIndex = idx;
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(idx));
}
function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}
function dropRow(event, targetIndex) {
  event.preventDefault();
  const from = draggedIndex ?? Number(event.dataTransfer.getData("text/plain"));
  const to = Number(targetIndex);
  draggedIndex = null;
  if (!Number.isInteger(from) || !Number.isInteger(to) || from === to) return;
  const [moved] = state.accounts.splice(from, 1);
  state.accounts.splice(from < to ? to - 1 : to, 0, moved);
  render();
  showToast("순서를 바꿨어요. 보관하려면 브라우저에 저장을 눌러주세요.");
}

// ============================================================
// 엑셀 다운로드/업로드
// ============================================================

function forceTextWorksheet(ws) {
  if (!ws) return ws;
  Object.keys(ws).forEach(addr => {
    if (addr.startsWith("!")) return;
    if (!ws[addr]) return;
    ws[addr].t = "s";
    ws[addr].z = "@";
    ws[addr].v = cleanImportText(ws[addr].v);
  });
  return ws;
}

function persistBrowserSaveSilently() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function downloadTemplate() {
  const wb = XLSX.utils.book_new();
  const infoRows = [["구분", "항목", "값"]];
  for (const [key, label] of [["school","학교 정보"],["bank","은행 계좌 정보"],["card","결제 수단"]]) {
    DEFAULT_INFO[key].forEach(([name, value]) => infoRows.push([label, name, value]));
  }
  const inputRows = [["사이트명", "아이디", "비밀번호", "메모", "URL", "즐겨찾기"]];
  DEFAULT_ACCOUNTS.forEach(a => inputRows.push([a.site, a.id, a.password, a.memo, a.url || "", a.favorite ? "Y" : ""]));
  const infoWs = forceTextWorksheet(XLSX.utils.aoa_to_sheet(infoRows));
  const accWs = forceTextWorksheet(XLSX.utils.aoa_to_sheet(inputRows));
  infoWs["!cols"] = [{wch:18},{wch:24},{wch:36}];
  accWs["!cols"] = [{wch:34},{wch:24},{wch:24},{wch:42},{wch:46},{wch:10}];
  XLSX.utils.book_append_sheet(wb, infoWs, "기본정보");
  XLSX.utils.book_append_sheet(wb, accWs, "계정입력");
  XLSX.writeFile(wb, "학교키박스_기본입력파일.xlsx");
  showToast("개인 정보가 빠진 기본 입력파일을 다운로드했어요.");
}


function normalizeSheetLookupName(name) {
  return cleanImportText(name).replace(/[\s_\-()（）\[\]【】]/g, "").toLowerCase();
}
function findWorkbookSheetName(wb, candidates) {
  const normalizedCandidates = candidates.map(normalizeSheetLookupName);
  return wb.SheetNames.find(name => normalizedCandidates.includes(normalizeSheetLookupName(name))) || null;
}
function makeHeaderMap(headerRow) {
  const map = new Map();
  (headerRow || []).forEach((value, idx) => {
    const key = cleanImportText(value).replace(/\s+/g, "").toLowerCase();
    if (key && !map.has(key)) map.set(key, idx);
  });
  return map;
}
function getHeaderIndex(headerMap, aliases) {
  for (const alias of aliases) {
    const key = cleanImportText(alias).replace(/\s+/g, "").toLowerCase();
    if (headerMap.has(key)) return headerMap.get(key);
  }
  return -1;
}
function cellByHeader(row, idx, fallback = "") {
  return idx >= 0 ? cleanImportText(row[idx]) : cleanImportText(fallback);
}
function accountHasMeaningfulValue(account) {
  return !!cleanImportText(account?.site) && !["…", "..."].includes(cleanImportText(account?.site));
}

function parseUploadedWorkbook(wb) {
  const uploadedInfo = { school: [], bank: [], card: [] };
  let uploadedAccounts = [];
  const duplicateAccounts = [];
  const ignoredAccounts = [];

  const diagnostics = {
    sheetNames: Array.isArray(wb?.SheetNames) ? wb.SheetNames.slice() : [],
    infoSheetName: "",
    accountsSheetName: "",
    infoRawRows: 0,
    infoAcceptedRows: 0,
    accountsRawRows: 0,
    accountsAcceptedRows: 0,
    ignoredAccounts,
    duplicateAccounts
  };

  function rowHasAnyValue(row) {
    return Array.isArray(row) && row.some(value => cleanImportText(value));
  }
  function pushIgnoredAccount(reason, rowNumber, account, row) {
    ignoredAccounts.push({
      reason,
      rowNumber,
      site: cleanImportText(account?.site),
      id: cleanImportText(account?.id),
      password: cleanImportText(account?.password),
      memo: cleanImportText(account?.memo),
      raw: Array.isArray(row) ? row.map(cleanImportText).filter(Boolean).slice(0, 8).join(" / ") : ""
    });
  }
  function pushDuplicateAccount(account, rowNumber, row) {
    const duplicate = normalizeUploadedAccount(account);
    duplicate.rowNumber = rowNumber;
    duplicate.raw = Array.isArray(row) ? row.map(cleanImportText).filter(Boolean).slice(0, 8).join(" / ") : "";
    duplicateAccounts.push(duplicate);
  }

  const infoSheetName = findWorkbookSheetName(wb, ["기본정보", "학교정보", "기본 정보", "학교 정보", "공통정보", "공통 정보"]);
  const accSheetName = findWorkbookSheetName(wb, ["계정입력", "계정정보", "계정 입력", "계정 정보", "사이트계정", "사이트 계정"]);

  diagnostics.infoSheetName = infoSheetName || "";
  diagnostics.accountsSheetName = accSheetName || "";

  const hasInfoSheet = !!infoSheetName;
  const hasAccountsSheet = !!accSheetName;

  if (hasInfoSheet) {
    try {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[infoSheetName], { header: 1, defval: "", raw: false });
      const header = rows[0] || [];
      const headerMap = makeHeaderMap(header);
      const groupCol = getHeaderIndex(headerMap, ["구분", "분류", "그룹", "섹션", "종류"]);
      const labelCol = getHeaderIndex(headerMap, ["항목", "항목명", "이름", "라벨", "제목"]);
      const valueCol = getHeaderIndex(headerMap, ["값", "내용", "정보", "데이터", "입력값"]);
      rows.slice(1).forEach((row) => {
        if (!rowHasAnyValue(row)) return;
        diagnostics.infoRawRows += 1;
        const group = cellByHeader(row, groupCol, row[0]);
        const labelText = cellByHeader(row, labelCol, row[1]);
        const valueText = cellByHeader(row, valueCol, row[2]);
        if (!labelText) return;
        const g = String(group || "");
        const key = g.includes("은행")
          ? "bank"
          : g.includes("결제") || g.includes("카드")
            ? "card"
            : "school";
        uploadedInfo[key].push([labelText, valueText]);
        diagnostics.infoAcceptedRows += 1;
      });
    } catch (err) {
      console.error(err);
    }
  }

  if (hasAccountsSheet) {
    try {
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[accSheetName], { header: 1, defval: "", raw: false });
      const header = rows[0] || [];
      const headerMap = makeHeaderMap(header);
      const categoryCol = getHeaderIndex(headerMap, ["분류", "구분", "카테고리", "종류"]);
      const siteCol = getHeaderIndex(headerMap, ["사이트명", "사이트", "계정명", "이름", "서비스명", "쇼핑몰", "기관명"]);
      const idCol = getHeaderIndex(headerMap, ["아이디", "id", "ID", "계정", "계정ID", "로그인ID", "사용자ID"]);
      const passwordCol = getHeaderIndex(headerMap, ["비밀번호", "password", "PW", "pw", "패스워드", "암호"]);
      const memoCol = getHeaderIndex(headerMap, ["메모", "비고", "설명", "기관", "담당", "부서"]);
      const urlCol = getHeaderIndex(headerMap, ["URL", "url", "접속주소", "주소", "링크", "홈페이지"]);
      const favCol = getHeaderIndex(headerMap, ["즐겨찾기", "favorite", "빠른복사", "즐겨"]);

      const useHeader = siteCol >= 0;
      const firstHeaderIsCategory = cleanImportText(header[0]).replace(/\s+/g, "").includes("분류");
      const seenKeys = new Set();
      rows.slice(1).forEach((row, rowIdx) => {
        if (!rowHasAnyValue(row)) return;
        diagnostics.accountsRawRows += 1;
        const rowNumber = rowIdx + 2;
        const account = useHeader
          ? normalizeUploadedAccount({
              category: cellByHeader(row, categoryCol, "기타") || "기타",
              site: normalizeSiteName(cellByHeader(row, siteCol)),
              id: cellByHeader(row, idCol),
              password: cellByHeader(row, passwordCol),
              memo: cellByHeader(row, memoCol),
              url: cellByHeader(row, urlCol),
              favorite: parseFavoriteValue(cellByHeader(row, favCol))
            })
          : normalizeUploadedAccount({
              category: firstHeaderIsCategory ? cellByHeader(row, 0, "기타") : "기타",
              site: normalizeSiteName(cellByHeader(row, firstHeaderIsCategory ? 1 : 0)),
              id: cellByHeader(row, firstHeaderIsCategory ? 2 : 1),
              password: cellByHeader(row, firstHeaderIsCategory ? 3 : 2),
              memo: cellByHeader(row, firstHeaderIsCategory ? 4 : 3),
              url: cellByHeader(row, firstHeaderIsCategory ? 5 : 4),
              favorite: parseFavoriteValue(cellByHeader(row, firstHeaderIsCategory ? 6 : 5))
            });
        if (!accountHasMeaningfulValue(account)) {
          pushIgnoredAccount("사이트명이 비어 있음", rowNumber, account, row);
          return;
        }
        const key = importAccountKey(account);
        if (seenKeys.has(key)) {
          pushDuplicateAccount(account, rowNumber, row);
          return;
        }
        seenKeys.add(key);
        uploadedAccounts.push(account);
        diagnostics.accountsAcceptedRows += 1;
      });
    } catch (err) {
      console.error(err);
    }
  } else if (wb.SheetNames.length) {
    const sheetName = wb.SheetNames[0];
    const sheet = wb.Sheets[sheetName];
    diagnostics.accountsSheetName = sheetName;
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "", raw: false });
    let currentCategory = "기타";
    const seenKeysFallback = new Set();
    rows.forEach((r, rowIdx) => {
      if (!rowHasAnyValue(r)) return;
      diagnostics.accountsRawRows += 1;
      const b = cleanImportText(r[1]);
      if (!b || b === "사이트명" || b.includes("학교계정") || b.includes("학교 공통") || b.includes("계좌정보") || b.includes("결제 수단") || b.includes("사이트 계정 관리")) {
        if (!b) pushIgnoredAccount("사이트명 위치를 찾지 못함", rowIdx + 1, {}, r);
        return;
      }
      if (/^[0-9]️⃣/.test(b)) {
        currentCategory = b;
        return;
      }
      if (currentCategory !== "기타") {
        const acc = normalizeUploadedAccount({
          category: currentCategory,
          site: normalizeSiteName(b),
          id: cleanImportText(r[2]),
          password: cleanImportText(r[4]),
          memo: cleanImportText(r[5]),
          url: cleanImportText(r[8]),
          favorite: false
        });
        if (!accountHasMeaningfulValue(acc)) {
          pushIgnoredAccount("사이트명이 비어 있음", rowIdx + 1, acc, r);
          return;
        }
        const key = importAccountKey(acc);
        if (seenKeysFallback.has(key)) {
          pushDuplicateAccount(acc, rowIdx + 1, r);
          return;
        }
        seenKeysFallback.add(key);
        uploadedAccounts.push(acc);
        diagnostics.accountsAcceptedRows += 1;
      }
    });
  }

  return {
    info: uploadedInfo,
    accounts: normalizeAccountDefaults(uploadedAccounts),
    duplicateAccounts,
    ignoredAccounts,
    diagnostics,
    hasInfoSheet,
    hasAccountsSheet
  };
}

function cleanImportText(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}
function importCompareText(value) {
  return cleanImportText(value).toLowerCase();
}
function importKeyText(value) {
  return importCompareText(normalizeSiteName(value)).replace(/\s+/g, "");
}
function parseFavoriteValue(value) {
  return /^(y|yes|true|1|★)$/i.test(cleanImportText(value));
}
function normalizeUploadedAccount(acc) {
  return {
    category: cleanImportText(acc.category || "기타") || "기타",
    site: normalizeSiteName(cleanImportText(acc.site)),
    id: cleanImportText(acc.id),
    password: cleanImportText(acc.password),
    memo: cleanImportText(acc.memo),
    url: cleanImportText(acc.url),
    favorite: acc.favorite === true
  };
}
function infoSectionLabel(key) {
  return key === "bank" ? "은행 계좌 정보" : key === "card" ? "결제 수단" : "학교 정보";
}
function importInfoKey(row) {
  return importKeyText(row?.[0]);
}
function importAccountKey(acc) {
  const site = importKeyText(acc?.site);
  const id = importCompareText(acc?.id).replace(/\s+/g, "");
  const url = importCompareText(acc?.url).replace(/\s+/g, "");
  if (!site) return "";
  return [site, id || "__blank_id__", id ? "" : url].join("||");
}
function sameInfoRow(a, b) {
  return importCompareText(a?.[0]) === importCompareText(b?.[0]) && importCompareText(a?.[1]) === importCompareText(b?.[1]);
}
function sameAccountContent(a, b) {
  const fields = ["category", "site", "id", "password", "memo", "url"];
  return fields.every(field => importCompareText(a?.[field]) === importCompareText(b?.[field]));
}
function mergeInfoRowPreservingBlank(existingRow, uploadedRow) {
  const label = cleanImportText(uploadedRow?.[0]) || cleanImportText(existingRow?.[0]);
  const uploadedValue = cleanImportText(uploadedRow?.[1]);
  const existingValue = cleanImportText(existingRow?.[1]);
  return [label, uploadedValue || existingValue];
}
function mergeAccountPreservingBlanks(existing, uploaded) {
  const base = normalizeUploadedAccount(existing || {});
  const incoming = normalizeUploadedAccount(uploaded || {});
  ["category", "site", "id", "password", "memo", "url"].forEach(field => {
    const value = cleanImportText(incoming[field]);
    if (value) base[field] = value;
  });
  base.favorite = existing?.favorite === true || incoming.favorite === true;
  return base;
}
function buildUploadPlan(uploaded) {
  const plan = {
    uploaded,
    info: { school: [], bank: [], card: [] },
    accounts: [],
    // Track how many items fall into each bucket.  In addition to the
    // original new/changed/same/removed counts we now record the
    // number of duplicate rows detected within the upload.  Duplicate
    // rows are not added to the plan.accounts list, so we must
    // explicitly compute the count from the uploaded object.
    counts: { new: 0, changed: 0, same: 0, removed: 0, duplicate: 0 }
  };

  for (const key of ["school", "bank", "card"]) {
    const existingRows = Array.isArray(state.info?.[key]) ? state.info[key] : [];
    const seenKeys = new Set();
    (uploaded.info?.[key] || []).forEach(row => {
      const rowKey = importInfoKey(row);
      if (!rowKey || seenKeys.has(rowKey)) return;
      seenKeys.add(rowKey);
      const existingIndex = existingRows.findIndex(existing => importInfoKey(existing) === rowKey);
      const item = { section: key, sectionLabel: infoSectionLabel(key), existingIndex, uploaded: [cleanImportText(row[0]), cleanImportText(row[1])] };
      if (existingIndex < 0) item.type = "new";
      else if (sameInfoRow(existingRows[existingIndex], row)) item.type = "same";
      else item.type = "changed";
      plan.info[key].push(item);
      plan.counts[item.type] += 1;
    });
    if (uploaded.hasInfoSheet) {
      existingRows.forEach((existing, existingIndex) => {
        const rowKey = importInfoKey(existing);
        if (!rowKey || seenKeys.has(rowKey)) return;
        plan.info[key].push({
          section: key,
          sectionLabel: infoSectionLabel(key),
          existingIndex,
          uploaded: [cleanImportText(existing?.[0]), cleanImportText(existing?.[1])],
          type: "removed"
        });
        plan.counts.removed += 1;
      });
    }
  }

  const existingAccounts = Array.isArray(state.accounts) ? state.accounts : [];
  const seenAccountKeys = new Set();
  (uploaded.accounts || []).forEach(acc => {
    const account = normalizeUploadedAccount(acc);
    const key = importAccountKey(account);
    if (!key || seenAccountKeys.has(key)) return;
    seenAccountKeys.add(key);
    const existingIndex = existingAccounts.findIndex(existing => importAccountKey(existing) === key);
    const item = { section: "accounts", sectionLabel: "사이트 계정", existingIndex, uploaded: account };
    if (existingIndex < 0) item.type = "new";
    else if (sameAccountContent(existingAccounts[existingIndex], account)) item.type = "same";
    else item.type = "changed";
    plan.accounts.push(item);
    plan.counts[item.type] += 1;
  });
  if (uploaded.hasAccountsSheet) {
    existingAccounts.forEach((existing, existingIndex) => {
      const key = importAccountKey(existing);
      if (!key || seenAccountKeys.has(key)) return;
      plan.accounts.push({
        section: "accounts",
        sectionLabel: "사이트 계정",
        existingIndex,
        uploaded: normalizeUploadedAccount(existing),
        type: "removed"
      });
      plan.counts.removed += 1;
    });
  }
  // Set the duplicate count based on what parseUploadedWorkbook detected.
  plan.counts.duplicate = Array.isArray(uploaded.duplicateAccounts)
    ? uploaded.duplicateAccounts.length
    : 0;
  return plan;
}
function planItemList(plan) {
  return [
    ...(plan.info.school || []),
    ...(plan.info.bank || []),
    ...(plan.info.card || []),
    ...(plan.accounts || [])
  ];
}
function applyUploadPlan(plan, mode) {
  if (!plan || !mode) return;
  syncInputs();
  const nextState = { info: deepClone(state.info || {}), accounts: Array.isArray(state.accounts) ? state.accounts.map(a => ({...a})) : [] };

  if (mode === "update") {
    if (plan.uploaded?.hasInfoSheet) {
      for (const key of ["school", "bank", "card"]) {
        nextState.info[key] = (plan.uploaded.info?.[key] || []).map(row => [cleanImportText(row?.[0]), cleanImportText(row?.[1])]);
      }
    }
    if (plan.uploaded?.hasAccountsSheet) {
      const existingFavoriteByKey = new Map();
      nextState.accounts.forEach(acc => {
        const key = importAccountKey(acc);
        if (key && !existingFavoriteByKey.has(key)) existingFavoriteByKey.set(key, acc.favorite === true);
      });
      nextState.accounts = (plan.uploaded.accounts || []).map(acc => {
        const uploaded = normalizeUploadedAccount(acc);
        const key = importAccountKey(uploaded);
        return { ...uploaded, favorite: existingFavoriteByKey.has(key) ? existingFavoriteByKey.get(key) : uploaded.favorite };
      });
    }
    state = { info: nextState.info, accounts: normalizeAccountDefaults(nextState.accounts) };
    deleteMode = { info: {}, account: {} };
    const saved = persistBrowserSaveSilently();
    render();
    showToast(`신규 ${plan.counts.new}개 추가, 변경 ${plan.counts.changed}개 업데이트, 엑셀에 없는 항목 ${plan.counts.removed}개를 정리했어요.${saved ? " 브라우저에도 저장했어요." : " 브라우저 저장은 실패했어요."}`);
    return;
  }

  for (const key of ["school", "bank", "card"]) {
    if (!Array.isArray(nextState.info[key])) nextState.info[key] = [];
    (plan.info[key] || []).forEach(item => {
      if (item.type === "removed") return;
      if (mode === "add-all") {
        nextState.info[key].push([...item.uploaded]);
        return;
      }
      if (item.type === "new") {
        nextState.info[key].push([...item.uploaded]);
      } else if (mode === "merge" && item.type === "changed" && item.existingIndex >= 0) {
        nextState.info[key][item.existingIndex] = mergeInfoRowPreservingBlank(nextState.info[key][item.existingIndex], item.uploaded);
      }
    });
  }

  (plan.accounts || []).forEach(item => {
    if (item.type === "removed") return;
    const uploaded = normalizeUploadedAccount(item.uploaded);
    if (mode === "add-all") {
      nextState.accounts.push(uploaded);
      return;
    }
    if (item.type === "new") {
      nextState.accounts.push(uploaded);
    } else if (mode === "merge" && item.type === "changed" && item.existingIndex >= 0) {
      const existingFavorite = nextState.accounts[item.existingIndex]?.favorite === true;
      nextState.accounts[item.existingIndex] = { ...mergeAccountPreservingBlanks(nextState.accounts[item.existingIndex], uploaded), favorite: existingFavorite };
    }
  });

  state = { info: nextState.info, accounts: normalizeAccountDefaults(nextState.accounts) };
  deleteMode = { info: {}, account: {} };
  const saved = persistBrowserSaveSilently();
  render();
  const message = mode === "add-only"
    ? `새 항목 ${plan.counts.new}개만 추가했어요.`
    : mode === "merge"
      ? `새 항목 ${plan.counts.new}개 추가, 내용 바뀐 항목 ${plan.counts.changed}개를 반영했어요.`
      : `업로드 항목 ${planItemList(plan).length}개를 새 항목으로 추가했어요.`;
  showToast(`${message}${saved ? " 브라우저에도 저장했어요." : " 브라우저 저장은 실패했어요."}`);
}
function closeUploadModal() {
  const modal = document.getElementById("excelUploadModal");
  if (modal) modal.remove();
}
function resetUploadInput() {
  const uploadInput = document.getElementById("uploadInput");
  if (uploadInput) uploadInput.value = "";
}

function diagnosticAccountLabel(item) {
  const site = cleanImportText(item?.site) || "사이트명 없음";
  const id = cleanImportText(item?.id);
  const row = item?.rowNumber ? `${item.rowNumber}행 · ` : "";
  return `${row}${site}${id ? ` / ${id}` : ""}`;
}
function buildUploadDiagnosticsHtml(plan) {
  const uploaded = plan?.uploaded || {};
  const diagnostics = uploaded.diagnostics || {};
  const accountRead = Number(diagnostics.accountsRawRows || 0);
  const accountAccepted = Number(diagnostics.accountsAcceptedRows || (uploaded.accounts || []).length || 0);
  const accountExcluded = Math.max(0, accountRead - accountAccepted);
  const infoRead = Number(diagnostics.infoRawRows || 0);
  const infoAccepted = Number(diagnostics.infoAcceptedRows || 0);
  const ignored = Array.isArray(uploaded.ignoredAccounts) ? uploaded.ignoredAccounts : [];
  const duplicates = Array.isArray(uploaded.duplicateAccounts) ? uploaded.duplicateAccounts : [];
  const detailItems = [
    ...ignored.map(item => ({...item, reason: item.reason || "제외됨"})),
    ...duplicates.map(item => ({...item, reason: "엑셀 안 완전 중복"}))
  ];
  const detailHtml = detailItems.length
    ? `<details class="excel-diagnostics-detail">
        <summary>제외된 행 ${detailItems.length}개 보기</summary>
        <ul>
          ${detailItems.slice(0, 12).map(item => `<li><b>${esc(item.reason)}</b><span>${esc(diagnosticAccountLabel(item))}</span></li>`).join("")}
          ${detailItems.length > 12 ? `<li><b>더 있음</b><span>외 ${detailItems.length - 12}개</span></li>` : ""}
        </ul>
      </details>`
    : "";
  const accountToneClass = accountExcluded > 0 ? "has-warning" : "";
  return `
    <div class="excel-diagnostics" aria-label="엑셀 읽기 진단">
      <div class="excel-diagnostic-row ${accountToneClass}">
        <strong>사이트 계정</strong>
        <span>엑셀에서 읽은 행 ${accountRead}개 · 실제 비교 ${accountAccepted}개 · 제외 ${accountExcluded}개</span>
      </div>
      <div class="excel-diagnostic-row">
        <strong>학교/계좌/결제 정보</strong>
        <span>엑셀에서 읽은 행 ${infoRead}개 · 실제 비교 ${infoAccepted}개</span>
      </div>
      <div class="excel-diagnostic-row muted">
        <strong>읽은 시트</strong>
        <span>${esc(diagnostics.accountsSheetName || "계정 시트 없음")} / ${esc(diagnostics.infoSheetName || "기본정보 시트 없음")}</span>
      </div>
      ${detailHtml}
    </div>
  `;
}
function showUploadReviewModal(plan) {
  closeUploadModal();
  // Determine how many unique rows the plan contains.  When there are
  // zero items we differentiate between an empty diff and a missing
  // sheet/header to give a more helpful message.  If both the info and
  // account sheets were missing we display a specific error guiding
  // users to the template; otherwise fall back to the original text.
  const total = planItemList(plan).length;
  if (!total) {
    let msg;
    if (!plan?.uploaded?.hasInfoSheet && !plan?.uploaded?.hasAccountsSheet) {
      msg = "업로드 파일의 시트명 또는 헤더가 올바르지 않습니다. 템플릿을 참고해주세요.";
    } else {
      msg = "엑셀에서 반영할 항목을 찾지 못했어요.";
    }
    showToast(msg);
    resetUploadInput();
    return;
  }

  const bySection = planItemList(plan).reduce((acc, item) => {
    const label = item.sectionLabel || "기타";
    if (!acc[label]) acc[label] = {new:0, changed:0, same:0, removed:0};
    acc[label][item.type] += 1;
    return acc;
  }, {});
  const sectionRows = Object.entries(bySection).map(([label, c]) => `
    <div class="excel-modal-section-row">
      <strong>${esc(label)}</strong>
      <span>새로 추가 ${c.new} · 내용 바뀜 ${c.changed} · 그대로 유지 ${c.same} · 엑셀에 없음 ${c.removed}</span>
    </div>
  `).join("");
  const syncNotice = plan.counts.removed > 0
    ? `<p class="excel-modal-sync-warning">주의: 엑셀에 없는 기존 항목 <b>${plan.counts.removed}개</b>는 동기화하면 키박스에서 빠져요.</p>`
    : `<p class="excel-modal-sync-safe">엑셀처럼 맞추기는 새 항목·바뀐 내용·빠진 항목까지 엑셀 파일 기준으로 맞춰요.</p>`;
  const diagnosticsHtml = buildUploadDiagnosticsHtml(plan);

  const modal = document.createElement("div");
  modal.id = "excelUploadModal";
  modal.className = "excel-modal-backdrop no-print";
  modal.innerHTML = `
    <div class="excel-modal" role="dialog" aria-modal="true" aria-labelledby="excelUploadModalTitle">
      <button class="excel-modal-close" type="button" data-upload-action="cancel" aria-label="닫기">×</button>
      <div class="excel-modal-kicker">엑셀 업로드</div>
      <h3 id="excelUploadModalTitle">엑셀 파일과 비교했어요</h3>
      <p class="excel-modal-desc">기존 키박스와 업로드한 엑셀을 비교한 결과예요. 먼저 엑셀에서 몇 개를 읽었는지 확인한 뒤 반영 방식을 선택하세요.</p>
      ${diagnosticsHtml}
      <div class="excel-modal-summary" aria-label="업로드 비교 결과">
        <div><strong>${plan.counts.new}</strong><span>새로 추가됨</span></div>
        <div><strong>${plan.counts.changed}</strong><span>내용 바뀜</span></div>
        <div><strong>${plan.counts.same}</strong><span>그대로 유지</span></div>
        <div><strong>${plan.counts.removed}</strong><span>엑셀에 없음</span></div>
        <div><strong>${plan.counts.duplicate}</strong><span>완전 중복</span></div>
      </div>
      <div class="excel-modal-sections">${sectionRows}</div>
      <div class="excel-modal-note">
        <strong>추천:</strong> 2번째 이후 업로드는 <b>엑셀처럼 맞추기</b>가 가장 편해요. 기존 키박스 항목을 지우고 싶지 않다면 <b>삭제 없이 반영</b>을 선택하세요.<br><span>삭제 없이 반영에서는 엑셀의 빈칸이 기존 값을 지우지 않아요.</span>
      </div>
      ${syncNotice}
      <div class="excel-modal-actions">
        <button class="btn sync-main" type="button" data-upload-action="update">엑셀처럼 맞추기</button>
        <button class="btn modal-merge" type="button" data-upload-action="merge">삭제 없이 반영</button>
        <button class="btn modal-add-only" type="button" data-upload-action="add-only">새 항목만 추가</button>
        <button class="btn duplicate-add" type="button" data-upload-action="add-all">중복까지 모두 새로 추가</button>
        <button class="btn modal-cancel" type="button" data-upload-action="cancel">취소</button>
      </div>
      <p class="excel-modal-warn">중복까지 모두 새로 추가하면 같은 사이트명, 계좌명, 카드명이 여러 개 생길 수 있어요.</p>
    </div>
  `;
  modal.addEventListener("click", (event) => {
    const action = event.target?.dataset?.uploadAction;
    if (!action && event.target !== modal) return;
    const selectedAction = action || "cancel";
    if (selectedAction === "cancel") {
      closeUploadModal();
      resetUploadInput();
      showToast("엑셀 업로드를 취소했어요.");
      return;
    }
    if (selectedAction === "add-all") {
      const ok = confirm("같은 사이트명, 계좌명, 카드명이 여러 개 생길 수 있어요.\n그래도 중복을 허용하고 모두 추가할까요?");
      if (!ok) return;
    }
    if (selectedAction === "update" && plan.counts.removed > 0) {
      // For large deletions display a more explicit warning: inform the user
      // that only the uploaded accounts will remain after syncing.  When
      // removed entries are fewer than 10 we keep the original concise
      // wording.  Otherwise we emphasise that many items will be removed
      // and only the uploaded entries will remain.
      let confirmMsg;
      if (plan.counts.removed >= 10) {
        const keptTotal = plan.counts.new + plan.counts.changed + plan.counts.same;
        confirmMsg = `엑셀에 없는 기존 항목 ${plan.counts.removed}개가 빠지고, 엑셀의 ${keptTotal}개 항목만 남게 됩니다.\n엑셀처럼 맞출까요?`;
      } else {
        confirmMsg = `엑셀에 없는 기존 항목 ${plan.counts.removed}개가 키박스에서 빠집니다.\n엑셀처럼 맞출까요?`;
      }
      const ok = confirm(confirmMsg);
      if (!ok) return;
    }
    applyUploadPlan(plan, selectedAction);
    closeUploadModal();
    resetUploadInput();
  });
  document.body.appendChild(modal);
}

function handleUpload(file) {
  if (!file) return;
  syncInputs();
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = e.target.result;
      const wb = XLSX.read(data, { type: "array" });
      const uploaded = parseUploadedWorkbook(wb);
      const plan = buildUploadPlan(uploaded);
      showUploadReviewModal(plan);
    } catch (err) {
      console.error(err);
      resetUploadInput();
      showToast("엑셀 파일을 읽지 못했어요. 파일 형식을 확인해주세요.");
    }
  };
  reader.onerror = () => {
    resetUploadInput();
    showToast("엑셀 파일을 읽지 못했어요. 파일 형식을 확인해주세요.");
  };
  reader.readAsArrayBuffer(file);
}

function getSchoolEmailPrefix() {
  const row = (state.info.school || []).find(([label]) => String(label || "").replace(/\s+/g, "") === "학교메일");
  const email = String(row?.[1] || "school").trim();
  const prefix = (email.split("@")[0] || "school").replace(/[^a-zA-Z0-9가-힣_-]/g, "_");
  return prefix || "school";
}
function getTimestampForFilename() {
  const d = new Date();
  const yy = String(d.getFullYear()).slice(-2);
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mi = String(d.getMinutes()).padStart(2, "0");
  return `${yy}${mm}${dd}_${hh}${mi}`;
}
function exportBasicExcel() {
  syncInputs();
  const wb = XLSX.utils.book_new();
  const infoRows = [["구분", "항목", "값"]];
  for (const [key, label] of [["school","학교 정보"],["bank","은행 계좌 정보"],["card","결제 수단"]]) {
    (state.info[key] || []).forEach(([name, value]) => infoRows.push([label, name, value]));
  }
  const accountRows = [["사이트명", "아이디", "비밀번호", "메모", "URL", "즐겨찾기"]];
  state.accounts.forEach(a => accountRows.push([a.site || "", a.id || "", a.password || "", a.memo || "", a.url || "", a.favorite ? "Y" : ""]));
  const infoWs = forceTextWorksheet(XLSX.utils.aoa_to_sheet(infoRows));
  const accWs = forceTextWorksheet(XLSX.utils.aoa_to_sheet(accountRows));
  infoWs["!cols"] = [{wch:18},{wch:24},{wch:36}];
  accWs["!cols"] = [{wch:34},{wch:24},{wch:24},{wch:42},{wch:46},{wch:10}];
  XLSX.utils.book_append_sheet(wb, infoWs, "기본정보");
  XLSX.utils.book_append_sheet(wb, accWs, "계정입력");
  XLSX.writeFile(wb, `${getSchoolEmailPrefix()}_KEYBOX_${getTimestampForFilename()}.xlsx`);
  showToast("현재 내용을 KEYBOX 엑셀 파일로 다운로드했어요.");
}

// ============================================================
// 로컬 저장 / 불러오기 / 초기화 / JSON 백업
// ============================================================
function saveLocal() {
  syncInputs();
  try {
    const serialized = JSON.stringify(state);
    // localStorage는 브라우저마다 약 5MB 정도로 제한됩니다. 데이터가 너무 크면 저장하지 않습니다.
    // 문자열 길이 기준으로 간단히 체크합니다.
    if (serialized.length > 5_000_000) {
      throw new Error("데이터가 너무 커 저장할 수 없어요. 일부 항목을 줄여주세요.");
    }
    localStorage.setItem(STORAGE_KEY, serialized);
    showToast("브라우저에 저장했어요.");
  } catch (err) {
    showToast(err.message || "저장하지 못했어요. 브라우저 저장소 설정을 확인해 주세요.");
  }
}
function loadLocal(options = {}) {
  const { silent = false } = options;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      if (!silent) showToast("저장된 내용이 없어요.");
      return false;
    }
    const savedState = JSON.parse(raw);
    if (!savedState || !savedState.info || !Array.isArray(savedState.accounts)) throw new Error("invalid saved data");
    state = savedState;
    state.accounts = normalizeAccountDefaults(state.accounts);
    deleteMode = { info: {}, account: {} };
    render();
    if (!silent) showToast("저장 내용을 불러왔어요.");
    return true;
  } catch (err) {
    if (!silent) showToast("저장 내용을 불러오지 못했어요. JSON 백업이 있으면 불러와 주세요.");
    return false;
  }
}
function resetAll() {
  if (!confirm("브라우저에 저장된 모든 정보를 초기화할까요?\n이 작업은 되돌릴 수 없습니다.")) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {}
  state = { info: deepClone(DEFAULT_INFO), accounts: normalizeAccountDefaults(deepClone(DEFAULT_ACCOUNTS)) };
  deleteMode = { info: {}, account: {} };
  render();
  showToast("브라우저 저장내용을 초기화했어요.");
}
function backupJson() {
  syncInputs();
  const payload = {
    app: "우리학교 키박스",
    version: "v3.1.16",
    exportedAt: new Date().toISOString(),
    data: state
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json;charset=utf-8"});
  saveAs(blob, `우리학교-키박스-백업-${new Date().toISOString().slice(0,10)}.json`);
  showToast("JSON 백업 파일을 만들었어요.");
}
async function loadJsonFile(file) {
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const data = parsed.data || parsed;
    if (!data || !Array.isArray(data.accounts) || !data.info) throw new Error("invalid");
    state = { info: data.info, accounts: normalizeAccountDefaults(data.accounts) };
    deleteMode = { info: {}, account: {} };
    render();
    showToast("JSON 백업을 불러왔어요. 보관하려면 브라우저에 저장을 눌러주세요.");
  } catch (err) {
    showToast("JSON 파일을 불러오지 못했어요.");
  }
}

// ============================================================
// 검색창 동작 (X버튼 / 검색 지우기 통합)
// ============================================================
function clearSearch() {
  accountSearchTerm = "";
  const accountSearchEl = document.getElementById("searchInput");
  if (accountSearchEl) accountSearchEl.value = "";
  renderAccounts();
  renderInfoCards();
}

// ============================================================
// 전역 노출 (inline onclick에서 호출되는 함수들)
// ============================================================
window.toggleFavorite = toggleFavorite;
window.openAccountUrl = openAccountUrl;
window.copyText = copyText;
window.copyAccountField = copyAccountField;
window.addInfoRow = addInfoRow;
window.toggleInfoDelete = toggleInfoDelete;
window.toggleAccountDelete = toggleAccountDelete;
window.addRow = addRow;
window.addRowToCategory = addRowToCategory;
window.dragStart = dragStart;
window.dragOver = dragOver;
window.dropRow = dropRow;


function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function calmScrollTo(targetTop, duration = 760) {
  const maxTop = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  const finalTop = Math.max(0, Math.min(targetTop, maxTop));
  if (prefersReducedMotion()) {
    window.scrollTo(0, finalTop);
    return Promise.resolve();
  }
  const startTop = window.scrollY || document.documentElement.scrollTop || 0;
  const distance = finalTop - startTop;
  if (Math.abs(distance) < 2) return Promise.resolve();
  const startTime = performance.now();
  return new Promise(resolve => {
    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startTop + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
      else resolve();
    }
    requestAnimationFrame(step);
  });
}
function calmScrollToElement(element, options = {}) {
  if (!element) return Promise.resolve();
  const navHeight = document.querySelector(".top-nav")?.offsetHeight || 76;
  const gap = 14;
  const rect = element.getBoundingClientRect();
  const currentTop = window.scrollY || document.documentElement.scrollTop || 0;
  let targetTop = currentTop + rect.top - navHeight - gap;
  if (options.block === "center") {
    targetTop = currentTop + rect.top - Math.max(0, (window.innerHeight - rect.height) / 2);
  }
  return calmScrollTo(targetTop, options.duration || 980);
}
function markSectionArrived(element) {
  if (!element || prefersReducedMotion()) return;
  document.querySelectorAll(".section-arrived").forEach(el => el.classList.remove("section-arrived"));
  element.classList.remove("section-arrived");
  void element.offsetWidth;
  element.classList.add("section-arrived");
  window.setTimeout(() => element.classList.remove("section-arrived"), 1150);
}

// ============================================================
// 초기 로드 / 스크롤 / 이벤트 바인딩
// ============================================================
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.addEventListener("load", () => {
  if (!window.location.hash) window.scrollTo(0, 0);
});

const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 500);
  });
  scrollTopBtn.addEventListener("click", () => {
    calmScrollTo(0, 980);
  });
}

document.getElementById("downloadTemplateBtn").onclick = downloadTemplate;
document.getElementById("uploadInput").onchange = e => e.target.files[0] && handleUpload(e.target.files[0]);
document.getElementById("saveBtn").onclick = saveLocal;
document.getElementById("loadSavedBtn").onclick = loadLocal;
document.getElementById("exportExcelBtn").onclick = exportBasicExcel;

const jsonBackupBtn = document.getElementById("jsonBackupBtn");
if (jsonBackupBtn) jsonBackupBtn.onclick = backupJson;
const jsonLoadInput = document.getElementById("jsonLoadInput");
if (jsonLoadInput) jsonLoadInput.onchange = e => loadJsonFile(e.target.files?.[0]);

document.getElementById("printBtn").onclick = () => {
  syncInputs();
  render();
  setTimeout(() => window.print(), 50);
};
document.getElementById("resetBtn").onclick = resetAll;

const accountSearchEl = document.getElementById("searchInput");
if (accountSearchEl) accountSearchEl.oninput = e => {
  accountSearchTerm = e.target.value;
  renderAccounts();
  renderInfoCards();
};




document.querySelectorAll('.top-brand[href^="#"], .top-menu a[href^="#"]:not([data-nav="search"])').forEach(link => {
  link.addEventListener("click", event => {
    const hash = link.getAttribute("href");
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    calmScrollToElement(target, { duration: 980 }).then(() => markSectionArrived(target));
    try { history.replaceState(null, "", hash); } catch (error) {}
  });
});

// 상단 네비게이션 검색 버튼: 검색창으로 이동 후 바로 입력 가능하도록 포커스
const searchNavButton = document.querySelector('[data-nav="search"]');
const searchSection = document.getElementById("searchSection");
const searchInput = document.getElementById("searchInput");

function focusSearchInput() {
  if (!searchInput) return;
  searchInput.focus({ preventScroll: true });
  const valueLength = searchInput.value.length;
  try {
    searchInput.setSelectionRange(valueLength, valueLength);
  } catch (error) {
    // 일부 입력 타입/브라우저에서 setSelectionRange가 제한될 수 있어 포커스만 유지합니다.
  }
}

if (searchNavButton && searchSection && searchInput) {
  searchNavButton.addEventListener("click", event => {
    event.preventDefault();

    calmScrollToElement(searchSection, { block: "center", duration: 980 }).then(() => {
      markSectionArrived(searchSection);
      setTimeout(focusSearchInput, 120);
    });
  });
}

// 검색 지우기 / X 버튼: 동일 동작 (검색어만 삭제, 저장 데이터는 건드리지 않음)
const clearSearchBtn = document.getElementById("clearSearchBtn");
if (clearSearchBtn) clearSearchBtn.onclick = clearSearch;
const searchXBtn = document.getElementById("searchXBtn");
if (searchXBtn) searchXBtn.onclick = clearSearch;

document.querySelectorAll("input[name='pwMode']").forEach(el => el.onchange = e => {
  pwMode = e.target.value;
  render();
});

// 저장된 내용이 있으면 페이지를 열 때 자동으로 복원합니다.
// 저장된 내용이 없거나 손상된 경우에는 기본 예시 데이터로 표시합니다.
if (!loadLocal({ silent: true })) render();

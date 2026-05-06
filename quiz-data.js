const SHEET_URL = "https://script.google.com/macros/s/AKfycbzZD0DgMvrYvwFCdbHSofGu9gvqXJItWxpDOEKY_xI-vq72k8kZmieH0XJc6NLSEc8/exec";


const Q = [

  // Q1 — 임산부석
  {
    cat:"Public Transport",
    vis:{type:"image", src:"images/q1.png", alt:"Pink priority seat for pregnant women on Korean bus"},
    text:"These pink seats are reserved for pregnant women — but it's okay to sit there if no pregnant passengers are visible.",
    ans:false,
    exp:"In Korea, both pink seats and priority seats for the elderly and disabled are kept empty as a matter of courtesy. There's no legal enforcement — but it's hard to tell by looking who is pregnant or elderly enough to need the seat. So the unwritten rule is simple: just leave them empty."
  },

  // Q2 — 한손 자세
  {
    cat:"Drinking",
    vis:{type:"image", src:"images/q2.png", alt:"Incorrect one-handed drink receiving posture"},
    text:"The posture shown is the correct way to receive a drink from someone senior to you.",
    ans:false,
    exp:"Even with two hands, posture matters. It's not just about grabbing with both hands — you want to support your wrist, like the image below shows. Nobody will force you to do this, but Koreans will genuinely appreciate it if you do. 😊",
    expImg:"images/a2.png"
  },

  // Q3 — 음주 나이
  {
    cat:"Drinking",
    vis:{type:"image", src:"images/q3.png", alt:"Korean legal drinking age sign: 19"},
    text:"In Korea, the legal drinking age is 19 years old.",
    ans:true,
    exp:"Correct. Korea's legal drinking age is 19 — which means turning 19 in the calendar year, not on your actual birthday. This is different from many countries. Don't offer alcohol to anyone in the group who is under 19, and don't accept it if you are."
  },

  // Q4 — 자리 배치
  {
    cat:"Dining",
    vis:{type:"image", src:"images/q4.png", alt:"Korean dining table seating arrangement diagram with numbered seats"},
    text:"Looking at this seating chart, seat number 6 is the seat of honour.",
    ans:false,
    exp:"The seat of honour is the one farthest from the entrance — in this diagram, that's seat 1, on the opposite side from the door. In formal or business settings, Koreans pay close attention to seating order. Among close friends it's more relaxed, but in professional situations, always let the most senior person choose their seat first."
  },

  // Q5 — 임산부 배지
  {
    cat:"Public Transport",
    vis:{type:"image", src:"images/q5.png", alt:"Korean pregnancy badge: Pregnant Women First"},
    text:"This badge — 'Pregnant Women First' can only be worn by pregnant women.",
    ans:true,
    exp:"Correct. This badge is issued by the Korean government specifically for pregnant women — especially those in early pregnancy who may not look visibly pregnant. If you see someone wearing this on the subway, give up your seat."
  },

  // Q6 — 어른 먼저
  {
    cat:"Dining",
    vis:{type:"image", src:"images/q6.png", alt:"Waiting for the eldest to eat first"},
    text:"You should wait for the eldest person at the table to start eating before you do.",
    ans:true,
    exp:"Correct. Respecting elders is central to Korean culture. Watching for the eldest to lift their spoon or chopsticks before starting is expected — and clearly noticed if you skip it."
  },

  // Q7 — 개찰구
  {
    cat:"Public Transport",
    vis:{type:"image", src:"images/q7.png", alt:"Wide accessibility gate at Seoul subway"},
    text:"The wide gate at the subway turnstile is strictly for wheelchair users and should not be used by others.",
    ans:false,
    exp:"The wide gate exists for everyone who needs more space — wheelchairs, strollers, large luggage, bicycles. Using it with a big bag is perfectly fine. Korean consideration isn't about rigid rules — it's about reading the situation and not taking space others genuinely need."
  },

  // Q8 — 신발
  {
    cat:"Indoor",
    vis:{type:"image", src:"images/q8.png", alt:"Shoes removed at entrance of Korean home"},
    text:"Taking off your shoes when entering a Korean home is basic etiquette.",
    ans:true,
    exp:"Every Korean home has a clear entryway designed exactly for this. Even if the host says 'don't worry about it' — take them off anyway. That's just politeness on their part."
  },

  // Q9 — 지하철 통화
  {
    cat:"Public Space",
    vis:{type:"image", src:"images/q9.png", alt:"Person on phone in Seoul subway"},
    text:"Taking a loud phone call on the Seoul subway is fine during off-peak hours.",
    ans:false,
    exp:"Korean public spaces — subways especially — are notably quiet regardless of the time. Loud calls are frowned upon. Keep calls short and low, or step off at the next stop."
  },

  // Q10 — 선물 뜯기
  {
    cat:"Gift Giving",
    vis:{type:"image", src:"images/q10.png", alt:"Receiving a gift in Korea"},
    text:"When you receive a gift in Korea, it's polite to open it immediately in front of the giver.",
    ans:false,
    exp:"Unlike Western custom, Koreans typically set gifts aside and open them later. Tearing it open on the spot can seem eager or greedy. Wait until the giver specifically invites you to open it."
  },

  // Q11 — 술 거절
  {
    cat:"Drinking",
    vis:{type:"image", src:"images/q11.png", alt:"Declining alcohol at a Korean gathering"},
    text:"Politely declining alcohol at a Korean gathering is acceptable and won't cause offence.",
    ans:true,
    exp:"True — especially in international and younger circles. Decline gracefully, not abruptly, and still hold your glass during toasts. It's opting out of the drink that's fine; opting out of the shared moment is what feels awkward."
  },

  // Q12 — 반찬
  {
    cat:"Dining",
    vis:{type:"image", src:"images/q12.png", alt:"Korean banchan side dishes on table"},
    text:"The shared side dishes (banchan) in the centre of the table are for everyone — take freely.",
    ans:true,
    exp:"Correct. Korean meals are communal by design. Banchan is shared. Just avoid double-dipping, and don't use your personal chopsticks to serve directly onto someone else's plate."
  },

  // Q13 — 단체 문화 (마지막)
  {
    cat:"Korean Culture",
    vis:{type:"image", src:"images/q13.png", alt:"Group activity representing Korean community harmony"},
    text:"In Korean group activities, following the schedule and instructions goes beyond just obeying rules — it is a sign of respect for Korea's collective culture.",
    ans:true,
    exp:"Correct. In Korea, collective harmony is a deeply rooted cultural value. When you follow the group schedule and listen to your leaders, Koreans see it not as blind compliance — but as genuine respect for the people around you. As you join us for this program, we ask the same: trust the schedule, follow your team leaders, and move together as a group. That's how we make this experience great for everyone."
  }

];

let cur=0, score=0, userName="", startTime, answers=[], attemptId="";

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function sendToSheet(payload) {
  if(!SHEET_URL || SHEET_URL==="YOUR_APPS_SCRIPT_URL_HERE") return;
  fetch(SHEET_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{'Content-Type':'text/plain'},
    body:JSON.stringify(payload)
  }).catch(err => console.warn('Sheet sync failed:', err));
}

function buildPayload(status) {
  const total = Q.length;
  const pct = total ? Math.round(score/total*100) : 0;
  const elapsed = Math.round((new Date()-startTime)/1000);
  const wrongCats = [...new Set(answers.filter(a=>!a.ok).map(a=>a.cat))];

  // per-question: pad unanswered with '-'
  const perQ = Q.map((_,i) => {
    const a = answers.find(a=>a.q===i+1);
    return a ? (a.ok?1:0) : '-';
  }).join(',');

  return {
    attempt_id: attemptId,
    timestamp:  new Date().toISOString(),
    name:       userName,
    status,                          // started / in_progress / completed
    answered:   answers.length,
    total,
    score,
    pct,
    elapsed_sec: elapsed,
    wrong_categories: wrongCats.join(', '),
    per_question: perQ               // e.g. "1,0,1,-,-,-,-,-,-,-,-,-,-"
  };
}

function startQuiz() {
  userName = document.getElementById('nameInput').value.trim();
  if(userName.length<2) return;
  startTime = new Date();
  attemptId = Date.now() + '_' + Math.random().toString(36).slice(2,7);
  cur=0; score=0; answers=[];
  document.getElementById('qTotal').textContent=Q.length;
  showScreen('screen-quiz');
  render();
  // ① 시작 즉시 Sheet에 한 줄 생성
  sendToSheet(buildPayload('started'));
}

function render() {
  const q=Q[cur];
  document.getElementById('qNum').textContent=cur+1;
  document.getElementById('qCat').textContent=q.cat;
  document.getElementById('progressFill').style.width=(cur/Q.length*100)+'%';
  document.getElementById('qText').textContent=q.text;

  const vis=document.getElementById('qVisual');
  if(q.vis.type==='image') {
    vis.innerHTML=`<div class="q-image-wrap"><img src="${q.vis.src}" alt="${q.vis.alt}"></div>`;
  } else if(q.vis.type==='placeholder') {
    vis.innerHTML=`<div class="q-image-wrap"><div class="q-placeholder"><span class="ph-emoji">${q.vis.emoji}</span><span class="ph-label">${q.vis.label}</span></div></div>`;
  } else {
    vis.innerHTML=`<span class="q-emoji-only">${q.vis.val}</span>`;
  }

  ['btnTrue','btnFalse'].forEach(id=>{
    const b=document.getElementById(id);
    b.className='choice-btn'; b.disabled=false;
  });
  document.getElementById('feedback').style.display='none';
  document.getElementById('nextBtn').style.display='none';

  const card=document.getElementById('questionCard');
  card.style.animation='none'; void card.offsetWidth; card.style.animation='fadeUp .35s ease both';
}

function answer(userAns) {
  const q=Q[cur];
  const ok=userAns===q.ans;
  if(ok) score++;
  answers.push({q:cur+1,cat:q.cat,ok});

  document.getElementById('btnTrue').disabled=true;
  document.getElementById('btnFalse').disabled=true;

  const chosen=document.getElementById(userAns?'btnTrue':'btnFalse');
  const other =document.getElementById(userAns?'btnFalse':'btnTrue');
  chosen.classList.add(ok?'correct':'wrong');
  if(!ok){
    other.classList.add('correct');
    const card=document.getElementById('questionCard');
    card.classList.add('shake');
    setTimeout(()=>card.classList.remove('shake'),400);
  }

  const fb=document.getElementById('feedback');
  fb.style.display='block';
  fb.className='feedback '+(ok?'correct-fb':'wrong-fb');
  document.getElementById('fbHead').textContent=ok?'✓  Correct!':'✗  Not quite.';
  document.getElementById('fbBody').textContent=q.exp;
  // feedback answer image (if defined)
  const wrap=document.getElementById('fbImgWrap');
  wrap.innerHTML = q.expImg
    ? `<img class="fb-img" src="${q.expImg}" alt="correct posture">`
    : '';
  document.getElementById('nextBtn').style.display='block';
}

function nextQ() {
  cur++;
  // ② Q3 완료 후 중간 저장
  if(cur===3) sendToSheet(buildPayload('in_progress'));
  // ③ Q8 완료 후 중간 저장
  if(cur===8) sendToSheet(buildPayload('in_progress'));
  if(cur>=Q.length) showResult(); else render();
}

function showResult() {
  showScreen('screen-result');
  const total=Q.length, pct=score/total;
  const elapsed=Math.round((new Date()-startTime)/1000);
  document.getElementById('scoreNum').textContent=score;
  document.getElementById('scoreDen').textContent=`out of ${total}`;
  document.getElementById('resultName').textContent=userName.toUpperCase();
  document.getElementById('progressFill').style.width='100%';
  setTimeout(()=>{ document.getElementById('pgCircle').style.strokeDashoffset=264-pct*264; },150);
  document.getElementById('retryBtn').style.display = pct===1 ? 'none' : 'block';

  let title,msg;
  if(pct===1){
    title="YOU'RE READY! 🎉";
    msg=`Perfect score — ${score}/${total}. You know your stuff. <strong>We'll see you in the session!</strong><br><small style="opacity:.6;font-size:12px;">Your result has been sent to Jongyeop Seon.</small>`;
  } else if(pct>=.8){
    title="SO CLOSE";
    msg=`${score}/${total} — Almost there! A few things slipped through. <strong>Give it another try and aim for 100.</strong>`;
  } else if(pct>=.6){
    title="NOT QUITE YET";
    msg=`${score}/${total} — You've got the basics, but there's more to cover. <strong>Review the feedback and try again.</strong>`;
  } else {
    title="TRY AGAIN";
    msg=`${score}/${total} — That's okay — this is what the quiz is for. <strong>Read each explanation carefully and go again.</strong>`;
  }

  document.getElementById('resultTitle').textContent=title;
  document.getElementById('resultMsg').innerHTML=msg;

  const wrongCats=[...new Set(answers.filter(a=>!a.ok).map(a=>a.cat))];

  // ④ 완료 시 최종 저장
  const finalPayload = buildPayload('completed');
  finalPayload.result = title;
  sendToSheet(finalPayload);

  if(SHEET_URL && SHEET_URL!=="YOUR_APPS_SCRIPT_URL_HERE") {
    document.getElementById('savingBadge').className='saving-badge done';
    document.getElementById('savingText').textContent='Result saved ✓';
  } else {
    document.getElementById('savingBadge').style.display='none';
  }
}

function restart() {
  document.getElementById('nameInput').value='';
  document.getElementById('startBtn').disabled=true;
  showScreen('screen-intro');
}


// ── EVENT WIRING + ANIMATED BACKGROUND ──
// Scripts load at end of body, so DOM is already ready — no need for DOMContentLoaded
(function(){
  // Name input → enable/disable start button
  const nameInput = document.getElementById('nameInput');
  const startBtn  = document.getElementById('startBtn');
  if(nameInput && startBtn){
    nameInput.addEventListener('input', () => {
      startBtn.disabled = nameInput.value.trim().length < 2;
    });
    startBtn.addEventListener('click', startQuiz);
  }
  const wrap = document.getElementById('bgWrap');

  const streakData = [
    {w:'50vw', top:'8%',  delay:'0s',   dur:'8s' },
    {w:'35vw', top:'22%', delay:'2s',   dur:'6s' },
    {w:'60vw', top:'38%', delay:'0.8s', dur:'10s'},
    {w:'42vw', top:'54%', delay:'3.5s', dur:'7s' },
    {w:'55vw', top:'70%', delay:'1.5s', dur:'9s' },
    {w:'30vw', top:'84%', delay:'4s',   dur:'6.5s'},
    {w:'48vw', top:'95%', delay:'0.3s', dur:'11s'},
  ];
  streakData.forEach(s => {
    const el = document.createElement('div');
    el.className = 'streak';
    el.style.cssText = `width:${s.w};top:${s.top};animation-duration:${s.dur};animation-delay:${s.delay};`;
    wrap.appendChild(el);
  });

  const orbData = [
    {size:'500px', top:'-120px', left:'-100px', color:'rgba(36,46,193,0.18)', dur:'10s', delay:'0s'  },
    {size:'350px', top:'30%',    left:'55%',    color:'rgba(60,70,220,0.12)', dur:'13s', delay:'2s'  },
    {size:'250px', top:'65%',    left:'5%',     color:'rgba(36,46,193,0.10)', dur:'9s',  delay:'1.2s'},
    {size:'400px', top:'50%',    left:'70%',    color:'rgba(80,90,255,0.08)', dur:'15s', delay:'3s'  },
  ];
  orbData.forEach(o => {
    const el = document.createElement('div');
    el.className = 'orb';
    el.style.cssText = `width:${o.size};height:${o.size};top:${o.top};left:${o.left};background:${o.color};animation-duration:${o.dur};animation-delay:${o.delay};`;
    wrap.appendChild(el);
  });
})();

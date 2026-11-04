"""Generate code-native, fictional HealthOS workflow illustrations (no patient source data)."""
from pathlib import Path
from html import escape
out = Path('public/marketing/illustrative'); out.mkdir(parents=True, exist_ok=True)
def make(name,title,subtitle,panels,dark=False):
    bg,card,ink,muted,line = ('#101b30','#19263c','#f1f5f9','#b3c2d8','#35435b') if dark else ('#f3f6fa','#ffffff','#0b1026','#52627a','#dce5ef')
    s=[f'<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="700" viewBox="0 0 1120 700"><rect width="1120" height="700" rx="20" fill="{bg}"/>']
    def text(x,y,t,size=16,color=ink,weight=400):
        s.append(f'<text x="{x}" y="{y}" fill="{color}" font-family="Arial,sans-serif" font-size="{size}" font-weight="{weight}">{escape(t)}</text>')
    s.append(f'<path d="M0 64H1120" stroke="{line}"/>'); text(28,40,'SUMERO  /  HealthOS',20,ink,700);text(810,40,'DEMO CLINIC · FICTIONAL',13,muted,700)
    text(32,112,title,28,ink,700);text(32,144,subtitle,16,muted)
    count=len(panels); w=(1056-(count-1)*20)/count
    for i,(heading,rows) in enumerate(panels):
        x=32+i*(w+20)
        s.append(f'<rect x="{x}" y="176" width="{w}" height="440" rx="14" fill="{card}" stroke="{line}"/>')
        text(x+20,212,heading,18,ink,700)
        for j,row in enumerate(rows):
            y=252+j*64
            text(x+20,y,row[0],13,muted)
            text(x+20,y+24,row[1],17,ink,600)
    text(32,662,'Illustrative interface · fictional clinic and patient data · layout may vary',14,muted)
    s.append('</svg>'); (out/f'{name}.svg').write_text(''.join(s))
make('compact-emr','A focused consultation','Compact EMR · a wide workspace for the current visit', [('Patient context',[('PATIENT','Alex Demo · DEMO-001'),('HISTORY','Review previous visits'),('CLINICAL IMAGES','View visit attachments'),('BODY MAP','Record observations')]),('Consultation notes',[('NOTES','Enter consultation notes'),('STRUCTURED SOAP','Optional note format'),('DIAGNOSES','Record visit diagnoses'),('TEMPLATES','Choose a saved template')]),('Visit actions',[('PRESCRIPTION','Review medicine instructions'),('SERVICES','Add a service package'),('DOCUMENTS','MC or referral letter'),('NEXT STEP','Finish consultation')])])
make('registration','Welcome a patient','Compact Workspace · review details, then save and add to the queue',[('Patient details',[('NAME','Alex Demo'),('PATIENT REFERENCE','DEMO-001'),('PHOTO','Review imported photo'),('LAYOUT','Compact / Guided / Classic')]),('Review and queue',[('MYKAD IMPORT','Review imported details'),('CHECK','Confirm patient information'),('SAVE','Save & Add To Queue'),('READER SETUP','Compatible reader + Windows')])])
make('dispensary','Dispensary Queue & Workspace','Review medicine, print labels and collect payment',[('To Dispense',[('QUEUE D-01','Alex Demo'),('PRESCRIPTION','Review prescribed items'),('INSTRUCTIONS','Check medicine directions'),('LABELS','Choose a label format')]),('Awaiting Payment',[('QUEUE D-02','Robin Example'),('CHECKOUT','Review charges'),('RECEIPT','Itemised or total-only'),('PATIENT LINK','Secure and expiring')]),('Completed Today',[('QUEUE D-03','Taylor Sample'),('STATUS','Checkout completed'),('RECEIPT BRANDING','Demo Clinic'),('FEEDBACK','Optional receipt QR')])])
make('printing','Clear labels. Clear receipts.','Fictional print examples · formats and clinic branding can be configured',[('Medicine label',[('DEMO CLINIC','Alex Demo · DEMO-001'),('MEDICINE','Example medicine'),('DIRECTIONS','As prescribed by the doctor'),('FORMAT','One of several label layouts')]),('Itemised receipt',[('DEMO RECEIPT','Not a transaction'),('Consultation','RM30.00'),('Medicine','RM10.00'),('TOTAL','RM40.00')]),('Total-only receipt',[('DEMO RECEIPT','Not a transaction'),('TOTAL','RM40.00'),('PATIENT ACCESS','Expiring receipt link'),('FEEDBACK','Optional QR placement')])])
make('insights','Understand your clinic activity','Selected period: 1–7 October 2026 · comparison: 24–30 September 2026',[('Completed consultations',[('THIS PERIOD','84 · fictional example'),('COMPARISON','78 · previous period'),('DETAIL','Open consultation drilldown'),('DIAGNOSES','Based on recorded diagnoses')]),('Patient activity',[('NEW PATIENTS','24 · fictional example'),('RETURNING PATIENTS','60 · fictional example'),('SOURCE','Recorded clinic visits'),('DATE RANGE','Selected dates shown above')]),('Medicine planning',[('USAGE','Review recorded medicine use'),('STOCK PLANNING','Estimates for clinic review'),('CONTEXT','Depends on recorded data'),('NEXT STEP','Review before purchasing')])])
make('dark-mode','A calmer view, after hours','Dispensary · dark mode illustration',[('To Dispense',[('QUEUE D-01','Alex Demo'),('PRESCRIPTION','Review medicine'),('LABELS','Select printing format'),('INSTRUCTIONS','Confirm directions')]),('Workspace',[('PATIENT','Alex Demo · DEMO-001'),('CHECKOUT','Review and collect payment'),('RECEIPT','Clinic-branded receipt'),('LAYOUT','Queue & Workspace / Classic')])],True)

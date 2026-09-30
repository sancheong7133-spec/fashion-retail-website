'use client'

import { useMemo, useState } from 'react'
import {
  Archive,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Folder,
  Grid2X2,
  Hash,
  Inbox,
  LayoutList,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Star,
  Tag,
  Trash2,
  X,
} from 'lucide-react'

const initialNotes = [
  { id: 1, title: '새로운 프로젝트 아이디어', text: '작은 습관을 기록하고 함께 성장하는 서비스. 매일의 성취를 한눈에 볼 수 있도록...', date: '오늘, 오전 9:42', color: 'yellow', tag: '아이디어', pinned: true },
  { id: 2, title: '이번 주 할 일', text: '• 팀 미팅 준비하기\n• 운동 3회 하기\n• 책 30페이지 읽기', date: '오늘, 오전 8:15', color: 'mint', tag: '개인', pinned: false },
  { id: 3, title: '좋아하는 문장', text: '“오늘의 작은 노력이 내일의 나를 만든다.”', date: '어제, 오후 6:20', color: 'lavender', tag: '영감', pinned: false },
  { id: 4, title: '장보기 목록', text: '아보카도, 토마토, 올리브오일, 바게트, 그릭요거트', date: '어제, 오후 1:10', color: 'peach', tag: '생활', pinned: false },
  { id: 5, title: '회의 메모 — 브랜드팀', text: '새 캠페인은 더 가볍고 친근한 톤으로. 다음 주 월요일까지 시안 공유.', date: '6월 12일', color: 'sky', tag: '업무', pinned: false },
  { id: 6, title: '여행 가고 싶은 곳', text: '제주도에서 한 달 살기\n• 조용한 바닷가\n• 아침 산책\n• 로컬 카페', date: '6월 10일', color: 'rose', tag: '여행', pinned: false },
]

const folders = [
  { label: '전체 메모', count: 24, icon: Inbox },
  { label: '즐겨찾기', count: 5, icon: Star },
  { label: '최근 삭제됨', count: 0, icon: Trash2 },
]

const colorClasses: Record<string, string> = {
  yellow: 'bg-[#fff4c9] border-[#f7e7a2]',
  mint: 'bg-[#dcf7e9] border-[#c1ead7]',
  lavender: 'bg-[#eee8ff] border-[#ddd1ff]',
  peach: 'bg-[#ffe7dc] border-[#f5d1c2]',
  sky: 'bg-[#dff2ff] border-[#c7e5f8]',
  rose: 'bg-[#ffe1eb] border-[#f6cbd9]',
}

export default function Page() {
  const [notes, setNotes] = useState(initialNotes)
  const [activeFolder, setActiveFolder] = useState('전체 메모')
  const [query, setQuery] = useState('')
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [editor, setEditor] = useState({ title: '', text: '' })

  const filteredNotes = useMemo(() => notes.filter((note) => `${note.title} ${note.text} ${note.tag}`.toLowerCase().includes(query.toLowerCase())), [notes, query])
  const selectedNote = notes.find((note) => note.id === selectedId)

  function openNote(id: number) {
    const note = notes.find((item) => item.id === id)
    if (!note) return
    setSelectedId(id)
    setEditor({ title: note.title, text: note.text })
  }

  function saveNote() {
    if (!selectedNote || !editor.title.trim()) return
    setNotes((current) => current.map((note) => note.id === selectedId ? { ...note, title: editor.title, text: editor.text, date: '방금 전' } : note))
    setSelectedId(null)
  }

  function createNote() {
    const id = Date.now()
    const note = { id, title: '새 메모', text: '여기에 메모를 작성해 보세요.', date: '방금 전', color: 'yellow', tag: '개인', pinned: false }
    setNotes((current) => [note, ...current])
    setSelectedId(id)
    setEditor({ title: note.title, text: note.text })
  }

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#202733]">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <aside className="hidden w-[246px] shrink-0 border-r border-[#e8edf3] bg-white px-5 py-7 lg:block">
          <div className="mb-10 flex items-center gap-3 px-2"><div className="flex size-9 items-center justify-center rounded-xl bg-[#5b8def] text-white shadow-sm shadow-blue-200"><FileText className="size-5" /></div><span className="text-[21px] font-bold tracking-[-0.04em]">memos</span></div>
          <button onClick={createNote} className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5b8def] py-3 text-[14px] font-semibold text-white shadow-lg shadow-blue-100 transition hover:bg-[#4b7fdf]"><Plus className="size-4" />새 메모</button>
          <nav className="flex flex-col gap-1">
            {folders.map(({ label, count, icon: Icon }) => <button key={label} onClick={() => setActiveFolder(label)} className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-[13px] ${activeFolder === label ? 'bg-[#edf4ff] font-semibold text-[#477bd6]' : 'text-[#7d8797] hover:bg-[#f6f8fb]'}`}><span className="flex items-center gap-3"><Icon className="size-[17px]" />{label}</span>{count > 0 && <span className="text-[12px] text-[#a5afbe]">{count}</span>}</button>)}
          </nav>
          <div className="my-8 h-px bg-[#edf0f4]" />
          <p className="mb-3 px-3 text-[11px] font-bold tracking-[0.12em] text-[#b2bac6]">폴더</p>
          <div className="flex flex-col gap-1"><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#7d8797] hover:bg-[#f6f8fb]"><Folder className="size-[17px] text-[#f0b64f]" />업무</button><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#7d8797] hover:bg-[#f6f8fb]"><Folder className="size-[17px] text-[#59c39a]" />개인</button><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#7d8797] hover:bg-[#f6f8fb]"><Folder className="size-[17px] text-[#ad91eb]" />아이디어</button></div>
          <div className="mt-auto flex flex-col gap-1 pt-24"><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#7d8797] hover:bg-[#f6f8fb]"><Settings className="size-[17px]" />설정</button><button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-[#7d8797] hover:bg-[#f6f8fb]"><CircleHelp className="size-[17px]" />도움말</button></div>
        </aside>

        <section className="min-w-0 flex-1 px-5 py-7 sm:px-8 lg:px-12">
          <header className="mb-9 flex items-center justify-between gap-4"><div><p className="mb-1 text-[13px] font-medium text-[#9aa5b4]">화요일, 6월 18일</p><h1 className="text-[28px] font-bold tracking-[-0.04em] sm:text-[32px]">안녕하세요, 지은님 <span className="text-[#f2bd55]">✦</span></h1></div><div className="flex items-center gap-3"><button className="hidden size-10 items-center justify-center rounded-full border border-[#e6ebf1] bg-white text-[#8893a2] sm:flex"><Bell className="size-[18px]" /></button><div className="flex size-10 items-center justify-center rounded-full bg-[#ffcfae] text-[13px] font-bold text-[#8a563a]">JY</div></div></header>
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><h2 className="text-[20px] font-bold">내 메모</h2><p className="mt-1 text-[13px] text-[#9aa5b4]">생각을 자유롭게 기록해 보세요.</p></div><div className="flex items-center gap-2"><div className="flex h-10 w-full items-center gap-2 rounded-xl border border-[#e5ebf2] bg-white px-3 text-[#a0aab8] sm:w-[220px]"><Search className="size-4" /><input aria-label="메모 검색" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="메모 검색" className="w-full bg-transparent text-[13px] text-[#344054] outline-none placeholder:text-[#b6bec9]" /></div><button aria-label="그리드 보기" className="hidden size-10 items-center justify-center rounded-xl border border-[#e5ebf2] bg-white text-[#7c8796] sm:flex"><Grid2X2 className="size-[17px]" /></button><button aria-label="목록 보기" className="size-10 items-center justify-center rounded-xl border border-[#5b8def] bg-[#edf4ff] text-[#5b8def] flex"><LayoutList className="size-[17px]" /></button></div></div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{filteredNotes.map((note) => <article key={note.id} onClick={() => openNote(note.id)} className={`group min-h-[194px] cursor-pointer rounded-2xl border p-5 shadow-[0_5px_18px_rgba(70,90,120,0.03)] transition hover:-translate-y-0.5 hover:shadow-md ${colorClasses[note.color]}`}><div className="mb-5 flex items-start justify-between"><span className="rounded-md bg-white/70 px-2 py-1 text-[11px] font-medium text-[#8f8c82]">{note.tag}</span><div className="flex items-center gap-2 text-[#a8a69e]"><span className="text-[11px]">{note.date}</span>{note.pinned && <Star className="size-3.5 fill-[#f2ba49] text-[#f2ba49]" />}</div></div><h3 className="mb-2 text-[16px] font-bold tracking-[-0.02em] text-[#30343b]">{note.title}</h3><p className="whitespace-pre-line text-[13px] leading-6 text-[#737984]">{note.text}</p><div className="mt-4 flex items-center justify-between opacity-0 transition group-hover:opacity-100"><div className="flex items-center gap-2 text-[#a29f96]"><Tag className="size-3.5" /><span className="text-[11px]">태그 추가</span></div><MoreHorizontal className="size-4 text-[#96948d]" /></div></article>)}</div>
          {filteredNotes.length === 0 && <div className="py-20 text-center text-sm text-[#929daa]">검색 결과가 없습니다.</div>}
          <div className="mt-10 flex items-center justify-center gap-2 text-[12px] text-[#a6afbb]"><Clock3 className="size-3.5" />모든 메모가 자동으로 저장됩니다</div>
        </section>
      </div>

      {selectedNote && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#24324a]/20 p-4 backdrop-blur-sm"><div className="w-full max-w-[570px] rounded-3xl bg-white p-6 shadow-2xl sm:p-8"><div className="mb-6 flex items-center justify-between"><div className="flex items-center gap-2 text-[13px] font-medium text-[#9aa5b4]"><Sparkles className="size-4 text-[#f0bb4e]" />메모 편집</div><button onClick={() => setSelectedId(null)} className="rounded-full p-2 text-[#a2acb9] hover:bg-[#f5f7fa]"><X className="size-5" /></button></div><input autoFocus value={editor.title} onChange={(e) => setEditor({ ...editor, title: e.target.value })} className="mb-4 w-full text-[24px] font-bold tracking-[-0.04em] text-[#252b35] outline-none" /><textarea value={editor.text} onChange={(e) => setEditor({ ...editor, text: e.target.value })} className="min-h-[190px] w-full resize-none rounded-xl bg-[#f8fafc] p-4 text-[14px] leading-7 text-[#687486] outline-none ring-[#dce8fb] focus:ring-2" /><div className="mt-5 flex items-center justify-between"><span className="text-[12px] text-[#aab3bf]">마지막 수정: {selectedNote.date}</span><button onClick={saveNote} className="flex items-center gap-2 rounded-xl bg-[#5b8def] px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-blue-100"><Check className="size-4" />저장하기</button></div></div></div>}
    </main>
  )
}

import type { LearnedGroup, NoteItem } from '../data/days.ts'

const listClasses = 'flex list-disc flex-col gap-2 pl-6 text-ink-secondary marker:text-ink-muted'

/** Bullet list where an item can carry its own sub-points. */
function NoteList({ items }: { items: readonly NoteItem[] }) {
  return (
    <ul className={listClasses}>
      {items.map((item) =>
        typeof item === 'string' ? (
          <li key={item}>{item}</li>
        ) : (
          <li key={item.text}>
            {item.text}
            <ul className={`${listClasses} mt-2 list-[circle]`}>
              {item.items.map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  )
}

type NoteSectionProps = {
  id: string
  title: string
  items: readonly NoteItem[]
}

/** One titled list in a day report. Renders nothing when the list is empty. */
export function NoteSection({ id, title, items }: NoteSectionProps) {
  if (items.length === 0) return null

  return (
    <section aria-labelledby={id} className="flex flex-col gap-3">
      <h2 id={id} className="text-h3">
        {title}
      </h2>
      <NoteList items={items} />
    </section>
  )
}

type LearnedSectionProps = {
  groups: readonly LearnedGroup[]
}

/** "What I learned", with a subheading per topic. Renders nothing when there are no groups. */
export function LearnedSection({ groups }: LearnedSectionProps) {
  if (groups.length === 0) return null

  return (
    <section aria-labelledby="learned" className="flex flex-col gap-3">
      <h2 id="learned" className="text-h3">
        What I learned
      </h2>
      {groups.map((group, index) => (
        <div key={group.topic ?? index} className="flex flex-col gap-2">
          {group.topic && <h3 className="mt-2 text-h4 font-semibold">{group.topic}</h3>}
          <NoteList items={group.items} />
        </div>
      ))}
    </section>
  )
}

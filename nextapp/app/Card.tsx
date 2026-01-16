export function Card({ title, content }: { title: string; content: string }) {
    return (
    <div className="border rounded-lg p-4">
    <h2 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title}</h2>
    <p>{content}</p>
    </div>
    )
   }
   

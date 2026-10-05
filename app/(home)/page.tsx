import Link from 'next/link';

const sections = [
  { title: 'Getting started', text: 'Run a server, open the panel and let players join.', href: '/docs/getting-started' },
  { title: 'Resources', text: 'How a resource is laid out, started and shipped to players.', href: '/docs/resources' },
  { title: 'Server scripting', text: 'Lua 5.4 functions and events available to server scripts.', href: '/docs/server' },
  { title: 'Client scripting', text: 'The game-side Lua runtime, commands, keys and events.', href: '/docs/client' },
  { title: 'UI pages', text: 'Build HTML interfaces shown in game, and talk to them from Lua.', href: '/docs/ui' },
  { title: 'Default resources', text: 'Chat, appearance and the other resources every server ships with.', href: '/docs/default-resources' },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <p className="text-fd-primary mb-3 text-sm font-semibold tracking-widest uppercase">Kingdom Come: Deliverance II</p>
        <h1 className="mb-5 text-4xl font-bold sm:text-5xl">KCD Co-op</h1>
        <p className="text-fd-muted-foreground mb-8 text-lg">
          Run your own multiplayer server for Kingdom Come: Deliverance II and build on it with resources: Lua scripts on the server, scripts inside the game, and HTML interfaces in game.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/docs" className="bg-fd-primary text-fd-primary-foreground rounded-full px-6 py-2.5 font-medium">
            Read the docs
          </Link>
          <Link href="/docs/server" className="border-fd-border rounded-full border px-6 py-2.5 font-medium">
            Scripting reference
          </Link>
        </div>
      </div>
      <div className="mt-16 grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Link key={section.href} href={section.href} className="border-fd-border bg-fd-card hover:bg-fd-accent rounded-xl border p-5 transition-colors">
            <h2 className="mb-1.5 font-semibold">{section.title}</h2>
            <p className="text-fd-muted-foreground text-sm">{section.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

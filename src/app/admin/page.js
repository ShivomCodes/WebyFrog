import clientPromise from "@/lib/mongodb";
import Link from "next/link";
import { logoutAdmin } from "../actions/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  let contacts = [];
  let error = null;

  try {
    const client = await clientPromise;
    const db = client.db();
    contacts = await db.collection("contacts").find({}).sort({ createdAt: -1 }).toArray();
  } catch (err) {
    console.error("Failed to fetch contacts:", err);
    error = "Failed to connect to the database. Ensure MONGODB_URI is set and the database is accessible.";
  }

  return (
    <div className="min-h-dvh bg-background p-4 md:p-8 pt-12 md:pt-24 font-body">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b-[4px] border-on-background pb-8">
          <div>
            <span className="text-[12px] md:text-[14px] font-black bg-primary-container text-on-primary-container border-2 border-on-background px-3 py-1 mb-4 inline-block uppercase" style={{ fontFamily: "var(--font-label)" }}>
              Admin Access Only
            </span>
            <h1 className="text-[32px] md:text-[48px] font-black uppercase leading-none" style={{ fontFamily: "var(--font-display)" }}>
              Command Center
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link href="/" className="text-[12px] md:text-[14px] font-black uppercase tracking-widest hover:text-primary transition-colors underline" style={{ fontFamily: "var(--font-label)" }}>
              Return to Base
            </Link>
            <form action={logoutAdmin}>
              <button type="submit" className="text-[10px] md:text-[12px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors underline cursor-pointer" style={{ fontFamily: "var(--font-label)" }}>
                Logout
              </button>
            </form>
          </div>
        </div>

        {error && (
          <div className="bg-primary-container text-on-primary-container p-4 border-[3px] border-on-background neo-shadow-sm font-bold">
            {error}
          </div>
        )}

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-on-background text-primary-fixed border-[3px] border-on-background p-6 neo-shadow">
              <h3 className="text-[12px] font-black uppercase tracking-[0.2em] mb-6 text-primary-container" style={{ fontFamily: "var(--font-label)" }}>
                System Stats
              </h3>
              <div className="space-y-4" style={{ fontFamily: "var(--font-label)" }}>
                <div className="flex justify-between items-center">
                  <span className="text-surface-dim uppercase text-[10px] font-bold">Total Briefs</span>
                  <span className="terminal-glow font-black text-primary-container text-[16px]">{contacts.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-surface-dim uppercase text-[10px] font-bold">Status</span>
                  <span className="terminal-glow font-black text-[#00ff00] text-[12px]">ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main List */}
          <div className="lg:col-span-3 space-y-6">
            {contacts.length === 0 && !error ? (
              <div className="bg-surface-container-lowest border-[3px] border-on-background p-12 text-center neo-shadow">
                <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">inbox</span>
                <p className="text-[16px] font-black uppercase tracking-widest text-on-surface-variant" style={{ fontFamily: "var(--font-label)" }}>
                  NO BRIEFS DEPLOYED YET.
                </p>
              </div>
            ) : (
              contacts.map((contact) => (
                <div key={contact._id.toString()} className="bg-background border-[4px] border-on-background neo-shadow hover:translate-x-1 hover:translate-y-1 transition-all">
                  <div className="p-4 md:p-6 border-b-[3px] border-on-background bg-surface-container flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-[20px] md:text-[24px] font-black uppercase" style={{ fontFamily: "var(--font-display)" }}>
                        {contact.name}
                      </h2>
                      <a href={`mailto:${contact.email}`} className="text-[14px] font-bold text-on-surface-variant hover:text-primary transition-colors underline break-all">
                        {contact.email}
                      </a>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] md:text-[12px] font-black border-[2px] border-on-background px-2 py-1 bg-primary-container text-on-primary-container inline-block" style={{ fontFamily: "var(--font-label)" }}>
                        {contact.scope}
                      </span>
                      <p className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-50" style={{ fontFamily: "var(--font-label)" }}>
                        {contact.createdAt ? new Date(contact.createdAt).toLocaleString() : 'UNKNOWN TIME'}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 bg-surface-container-lowest">
                    <p className="text-[12px] font-black uppercase tracking-widest mb-2 opacity-50" style={{ fontFamily: "var(--font-label)" }}>The Mission</p>
                    <p className="text-[14px] md:text-[16px] leading-relaxed whitespace-pre-wrap font-medium">
                      {contact.mission}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

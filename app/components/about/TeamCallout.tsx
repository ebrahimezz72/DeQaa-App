import Image from "next/image";
import Link from "next/link";

export default function TeamCallout() {
  return (
    <section className="py-12 px-8 pb-32">
      <div className="bg-secondary-container/30 p-8 rounded-2xl flex flex-col items-center text-center gap-6">
        <div className="flex -space-x-4 space-x-reverse relative z-10 w-32 h-12 justify-center">
          <div className="w-12 h-12 relative rounded-full border-2 border-surface overflow-hidden shadow-sm">
            <Image 
              fill
              className="object-cover" 
              alt="Team Member" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtfJGpp9AH65bRmZEwQRvvC0ZTcp86ec0bcVo4gVSMgdJkHMuMMoUdZjJGaWSbu4HNXBOgzEYVH1fhfrbcklWFjZT9aD0jT2Sj-IGAjMGWi-fR-afXRhOvZPjcGD1HQZCA60-tzYAFDTpj-M0Goaw9jM2f_bC0a9O28uGbO9WjCCrKm-SnEk96tffLKE8JPuNdjxEvS3gWQNClpz-U8wmi_Lh6marHyiURM17ZAlgLJrWLH9CoNXEVhs16Ea2SuFx1FAivS1ubZw0B"
            />
          </div>
          <div className="w-12 h-12 relative rounded-full border-2 border-surface overflow-hidden shadow-sm">
            <Image 
              fill
              className="object-cover" 
              alt="Team Member" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs2UpzbgJdt4KKH0t1B2FFyFxfvWHQUYoOuoXX5B1HrNkekN7CkgEGIfts5_WCjIFN8MPuw1WDvU-r3r2-9v20k1f_DiJY3mNeFRemtgqH_mEkDpl6f1FIdqjv6zd2SaWP4igEKbnkPaOS6Sk8CRIVwrVPXfabYWrHcE9paM9Lmj94nma4Tf4HlJvWUI2Y6o9hE9Bq0jgbQdByUbUm_mwjEp6LVcExO746IVAJzfRKSznIDbR2QmLDyMkFVYLmEKqV2CW5rfsFFRXl"
            />
          </div>
          <div className="w-12 h-12 relative rounded-full border-2 border-surface overflow-hidden shadow-sm">
            <Image 
              fill
              className="object-cover" 
              alt="Team Member" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjPhO_Y_N2NR5RXd8X_UswsoFYx2hSf4Kk4Nn9YJfVx1qsAVW_fgY4kC3txeuzHfLQF7sApEYNN8hb2m72dHLKDwU9w9290NjMZuKT6ecWG8L2OnB5bxLqRKAx1RCtZABaaeGWgVlIfj3KXMCJob-cDs9BdvXfF6bPSEx0UNrqOsS5Nx23cByBvD6xVgMrTJQyMncciW3Lv_FY6eg81kjfd5Tomx_DXknZJwjkl6KEuSXTkYyjuhPT0nbgwm34PaxyEot5VqUiBykL"
            />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-on-surface">نخبة من المستشارين في خدمتكم</h3>
        
        <Link href="/lawyers">
          <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform hover:bg-primary/90">
            تعرف على فريقنا
          </button>
        </Link>
      </div>
    </section>
  );
}

export const metadata = {
  title: "Νομικές Πληροφορίες | Sousouras Trans",
  description:
    "Εταιρικές και νομικές πληροφορίες της εταιρείας Sousouras Trans Μονοπρόσωπη Ι.Κ.Ε. – Οδικές Μεταφορές Εμπορευμάτων.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Νομικές Πληροφορίες
        </h1>

        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            <span className="font-semibold text-foreground">Επωνυμία:</span>{" "}
            Sousouras Trans Μονοπρόσωπη Ι.Κ.Ε.
          </p>

          <p>
            <span className="font-semibold text-foreground">Αντικείμενο:</span>{" "}
            Οδικές Μεταφορές Εμπορευμάτων
          </p>

          <p>
            <span className="font-semibold text-foreground">Έδρα:</span> Σαβάλια
            Ηλείας
          </p>

          <p>
            <span className="font-semibold text-foreground">Διαχειριστής:</span>{" "}
            Σουσούρας Χαράλαμπος
          </p>

          <p>
            <span className="font-semibold text-foreground">Email:</span>{" "}
            <a
              href="mailto:sousourasmpampis@gmail.com"
              className="text-primary hover:underline"
            >
              sousourasmpampis@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold text-foreground">ΑΡ. Γ.Ε.ΜΗ.:</span>{" "}
            174884025000
          </p>

          <p>
            <span className="font-semibold text-foreground">Α.Φ.Μ.:</span>{" "}
            802354715
          </p>

          <p>
            <span className="font-semibold text-foreground">
              Εταιρικό Κεφάλαιο:
            </span>{" "}
            3.000€
          </p>
        </div>
      </div>
    </main>
  )
}

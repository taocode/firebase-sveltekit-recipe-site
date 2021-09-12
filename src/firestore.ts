import type Firestore from "firebase/firestore";

let db: Firestore.Firestore = null;

export async function firestore(): Promise<Firestore.Firestore> {
  if (db) {
    return db;
  }

  // Checks for the client
  if (typeof window !== "undefined") {
    const fb: any = (await import("firebase/app"));

    db = fb.firestore();
    return db;
  }

  const fb: any = await import("firebase/app");
  return fb.getApps()[0].firestore() as firebase.firestore.Firestore;
}

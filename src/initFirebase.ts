import firebaseConfig from "./env";
import { initializeApp, getApp } from "firebase/app";

export async function initFirebase() {
  if (typeof window !== "undefined") {
    // You need to use firebase/app for the client side
    const fb: any = (await getApp());
    await import("firebase/auth");
    await import("firebase/firestore");
    await import("firebase/storage");
    console.log('1st',fb.getApps(),fb)
    if (! fb) {
      initializeApp(firebaseConfig);
    }
    return;
  }

  let fb: any;
  try {
    fb = await getApp();
  } catch (error) {
    initializeApp(firebaseConfig);    
  }
  console.log('2nd',fb)
}

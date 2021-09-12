<script context="module" lang="ts">
  import { initFirebase } from "../initFirebase";

  export async function load({ page, fetch, session, context }) {
    await initFirebase();
    return {
      props: {},
    };
  }
</script>

<script lang="ts">
  import { Container } from "sveltestrap";
  import firebase from "firebase/app";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";
  import authStore from "../stores/authStore";

  onMount(() => {
    const auth = getAuth(firebaseApp)
    onAuthStateChanged(auth,(user) => {
      authStore.set({
        isLoggedIn: user !== null,
        user,
        firebaseControlled: true,
      });
    });
  });
</script>

<Container>
  <slot />
</Container>

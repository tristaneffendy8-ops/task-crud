<script lang="ts" setup>
const sidebarOpen = ref(false);

function closeSidebar() {
  sidebarOpen.value = false;
}

const route = useRoute();
watch(() => route.path, () => {
  sidebarOpen.value = false;
});
</script>

<template>
  <div class="min-h-screen bg-white font-Montserrat flex flex-col">
    <!-- Navbar -->
    <header class="border-b border-slate-200 bg-white sticky top-0 z-40">
      <nav class="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center">
        <NuxtLink to="/" class="flex items-center gap-2 mr-auto">
          <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#f1a80a] flex items-center justify-center shadow-sm flex-shrink-0">
            <Icon name="mdi:calendar-check" class="text-white text-base sm:text-lg" />
          </div>
          <span class="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">TrainLog</span>
        </NuxtLink>

        <!-- Desktop nav -->
        <ul class="hidden md:flex gap-1 text-sm font-semibold">
          <li>
            <NuxtLink
              to="/"
              class="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              active-class="text-slate-900 bg-slate-100"
            >
              Jadwal
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/rekomendasi"
              class="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              active-class="text-slate-900 bg-slate-100"
            >
              Rekomendasi
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              active-class="text-slate-900 bg-slate-100"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile hamburger -->
        <button
          @click="sidebarOpen = true"
          class="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors flex-shrink-0"
          aria-label="Buka menu"
        >
          <Icon name="mdi:menu" class="text-2xl" />
        </button>
      </nav>
    </header>

    <!-- Mobile Sidebar Overlay -->
    <Teleport to="body">
      <Transition name="overlay-fade">
        <div
          v-if="sidebarOpen"
          class="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden"
          @click="closeSidebar"
        />
      </Transition>

      <!-- Mobile Sidebar Drawer -->
      <Transition name="sidebar-slide">
        <aside
          v-if="sidebarOpen"
          class="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white z-50 md:hidden flex flex-col shadow-2xl"
        >
          <!-- Sidebar Header -->
          <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-lg bg-[#f1a80a] flex items-center justify-center">
                <Icon name="mdi:calendar-check" class="text-white text-base" />
              </div>
              <span class="text-lg font-extrabold text-slate-900 tracking-tight">TrainLog</span>
            </div>
            <button
              @click="closeSidebar"
              class="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              aria-label="Tutup menu"
            >
              <Icon name="mdi:close" class="text-xl" />
            </button>
          </div>

          <!-- Sidebar Nav -->
          <nav class="flex-1 px-3 py-4">
            <ul class="space-y-1">
              <li>
                <NuxtLink
                  to="/"
                  @click="closeSidebar"
                  class="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  active-class="!text-[#f1a80a] bg-amber-50"
                >
                  <Icon name="mdi:calendar-month-outline" class="text-lg" />
                  Jadwal
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/rekomendasi"
                  @click="closeSidebar"
                  class="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  active-class="!text-[#f1a80a] bg-amber-50"
                >
                  <Icon name="mdi:star-outline" class="text-lg" />
                  Rekomendasi
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  @click="closeSidebar"
                  class="flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors"
                  active-class="!text-[#f1a80a] bg-amber-50"
                >
                  <Icon name="mdi:email-outline" class="text-lg" />
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Sidebar Footer -->
          <div class="px-5 py-4 border-t border-slate-100">
            <p class="text-xs text-slate-400">© 2026 TrainLog</p>
          </div>
        </aside>
      </Transition>
    </Teleport>

    <!-- Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-[#f1f1f1] mt-12 sm:mt-16">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-10">
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg bg-[#f1a80a] flex items-center justify-center">
                <Icon name="mdi:calendar-check" class="text-white text-base" />
              </div>
              <span class="text-lg font-extrabold text-slate-900">TrainLog</span>
            </div>
            <p class="text-slate-500 text-sm leading-relaxed">
              Catat, rencanakan, dan pantau jadwal latihanmu setiap hari. Konsistensi adalah kunci.
            </p>
          </div>

          <!-- Navigasi -->
          <div>
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Navigasi</p>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/" class="text-slate-600 hover:text-[#f1a80a] text-sm transition-colors">
                  Jadwal Saya
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/rekomendasi" class="text-slate-600 hover:text-[#f1a80a] text-sm transition-colors">
                  Rekomendasi Program
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-slate-600 hover:text-[#f1a80a] text-sm transition-colors">
                  Hubungi Kami
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Tips -->
          <div class="sm:col-span-2 md:col-span-1">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tips Latihan</p>
            <ul class="space-y-2 text-sm text-slate-500">
              <li class="flex items-start gap-2">
                <Icon name="mdi:check" class="text-[#f1a80a] mt-0.5 flex-shrink-0" />
                Latihan minimal 3x seminggu
              </li>
              <li class="flex items-start gap-2">
                <Icon name="mdi:check" class="text-[#f1a80a] mt-0.5 flex-shrink-0" />
                Pemanasan 5–10 menit sebelum mulai
              </li>
              <li class="flex items-start gap-2">
                <Icon name="mdi:check" class="text-[#f1a80a] mt-0.5 flex-shrink-0" />
                Istirahat cukup untuk pemulihan otot
              </li>
              <li class="flex items-start gap-2">
                <Icon name="mdi:check" class="text-[#f1a80a] mt-0.5 flex-shrink-0" />
                Minum air minimal 2 liter per hari
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p class="text-xs text-slate-400">© 2026 TrainLog. Dibuat untuk membantu kamu lebih konsisten.</p>
          <p class="text-xs text-slate-400">Built with <span class="text-[#f1a80a] font-semibold">Nuxt 4</span> + <span class="text-[#f1a80a] font-semibold">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.overlay-fade-enter-active, .overlay-fade-leave-active { transition: opacity 0.25s; }
.overlay-fade-enter-from, .overlay-fade-leave-to { opacity: 0; }

.sidebar-slide-enter-active, .sidebar-slide-leave-active { transition: transform 0.25s ease; }
.sidebar-slide-enter-from, .sidebar-slide-leave-to { transform: translateX(-100%); }
</style>

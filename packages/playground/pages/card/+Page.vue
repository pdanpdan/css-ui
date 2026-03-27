<template>
  <article class="space-y-6" v-once>
    <h2>Card</h2>

    <section class="group space-y-4">
      <h3>Playground</h3>

      <h4>
        Options (page defaults are <code>size-md</code> + <code>theme-neutral</code> + <code>variant-style-soft</code>)
      </h4>
      <DemoSelector />

      <h4>Basic Cards</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="w-full">{{ mode }}</em>
        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <p>
            Lorem ipsum dolor sit amet. Eum repellendus recusandae
            <strong>Ab eligendi qui molestiae eius ex quasi culpa</strong>. Quo asperiores officiis rem architecto
            magnirem veniam cum numquam quam ut quia animi. Aut rerum consequuntur
            <em>Et eligendi non iste ipsum ut rerum accusantium</em> et nemo doloribus ut modi placeat.
          </p>
          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions justify-between">
            <button type="button" class="btn theme-neutral variant-style-ghost">Cancel</button>

            <button type="button" class="btn variant-style-soft">Subscribe</button>
          </div>
        </article>

        <div class="w-full" />

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface">
          <h5 class="card-title">Using <code>surface</code></h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-lv-1">
          <h5 class="card-title">Using <code>surface-lv-1</code> (default)</h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-lv-2">
          <h5 class="card-title">Using <code>surface-lv-2</code></h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-lv-3">
          <h5 class="card-title">Using <code>surface-lv-3</code></h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-themed">
          <h5 class="card-title">Using <code>surface-themed</code></h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>
      </div>

      <h4>Cards with Media</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="w-full">{{ mode }}</em>
        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <img class="card-bleed" src="https://picsum.photos/id/200/400/300" />
          <p>
            Lorem ipsum dolor sit amet. Eum repellendus recusandae
            <strong>Ab eligendi qui molestiae eius ex quasi culpa</strong>. Quo asperiores officiis rem architecto
            magnirem veniam cum numquam quam ut quia animi. Aut rerum consequuntur
            <em>Et eligendi non iste ipsum ut rerum accusantium</em> et nemo doloribus ut modi placeat.
          </p>
          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <img class="card-bleed" src="https://picsum.photos/id/250/400/300" />
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <img class="card-bleed" src="https://picsum.photos/id/300/400/400" />

          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>

          <img class="card-bleed" src="https://picsum.photos/id/350/400/250" />
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <img class="card-bleed" src="https://picsum.photos/id/400/400/300" />

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions justify-between">
            <button type="button" class="btn theme-neutral variant-style-ghost">Cancel</button>

            <button type="button" class="btn variant-style-soft">Subscribe</button>
          </div>
        </article>

        <article :class="componentClass" class="max-w-120 min-w-70 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <img class="card-bleed-start" src="https://picsum.photos/id/550/300/250" />

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions flex-col items-end">
            <button type="button" class="btn theme-neutral variant-style-ghost">Cancel</button>

            <button type="button" class="btn variant-style-soft">Subscribe</button>
          </div>
        </article>

        <article :class="componentClass" class="max-w-120 min-w-70 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <img class="card-bleed-end" src="https://picsum.photos/id/575/250/250" />

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions flex-col items-end">
            <button type="button" class="btn theme-neutral variant-style-ghost">Cancel</button>

            <button type="button" class="btn variant-style-soft">Subscribe</button>
          </div>
        </article>

        <article :class="componentClass" class="max-w-120 min-w-70 flex-1 mode-dark">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <img class="card-bleed-full" src="https://picsum.photos/id/480/350/350" />

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions flex-col items-end">
            <button type="button" class="btn theme-neutral variant-style-filled">Cancel</button>

            <button type="button" class="btn variant-style-filled">Subscribe</button>
          </div>
        </article>
      </div>

      <h4>Interactive Cards</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start justify-end gap-4 surface p-4" :class="mode">
        <em class="w-full">{{ mode }}</em>
        <template v-for="s in ['', ...states]" :key="s">
          <article
            :class="[...componentClass, s]"
            tabindex="0"
            class="card-interactive max-w-80 min-w-60 flex-1 surface-lv-1"
          >
            <h5 class="card-title">
              <code>surface-lv-1</code> - <code>{{ s || 'rest' }}</code>
            </h5>

            <p>
              Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
              quas harumSed atque.
            </p>
            <p>
              Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
              voluptatem hic autem totam. Quo voluptatem veritatis
              <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
              <strong>Non enim ex quod nemo</strong>.
            </p>
          </article>
        </template>
        <div class="w-full" />
        <template v-for="s in ['', ...states]" :key="s">
          <article
            :class="[...componentClass, s]"
            tabindex="0"
            class="card-interactive max-w-80 min-w-60 flex-1 surface-themed"
          >
            <h5 class="card-title">
              <code>surface-themed</code> - <code>{{ s || 'rest' }}</code>
            </h5>

            <p>
              Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
              quas harumSed atque.
            </p>
            <p>
              Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
              voluptatem hic autem totam. Quo voluptatem veritatis
              <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
              <strong>Non enim ex quod nemo</strong>.
            </p>
          </article>
        </template>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import DemoSelector from '../../components/DemoSelector.vue';
import { demoSelectors, modes, states } from '../../settings';

const componentClass = [`card`, ...demoSelectors];
</script>

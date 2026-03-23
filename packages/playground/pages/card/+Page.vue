<template>
  <article class="space-y-6" v-once>
    <h2>Card</h2>

    <section class="group space-y-4">
      <h3>Playground</h3>

      <h4>Options (page defaults are <code>size-md</code> + <code>theme-neutral</code> + <code>variant-soft</code>)</h4>
      <div
        v-for="(sel, i) in [themes, sizes, variants.color, variants.density, variants.radius, variants.shape]"
        class="flex items-center gap-4"
      >
        <input
          v-for="v in ['', ...sel]"
          :key="v"
          class="btn checked:variant-filled"
          :class="v"
          type="radio"
          :name="`group${i}`"
          :value="v"
          :aria-label="v.split('-').at(-1) || (i > 2 ? 'default' : 'inherited')"
          :checked="v === ''"
        />
      </div>

      <h4>Basic Cards</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
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
          <p>
            Est tempore omnisQui nisi et laudantium libero quo adipisci tenetur et praesentium blanditiis eum corrupti
            voluptatem hic autem totam. Quo voluptatem veritatis
            <em>Non autem rem velit similique qui earum officia</em> et quibusdam facilis. Non quia vitae
            <strong>Non enim ex quod nemo</strong>.
          </p>
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-lv-2">
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
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-lv-3">
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
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1 surface-themed">
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
        </article>

        <article :class="componentClass" class="max-w-80 min-w-60 flex-1">
          <h5 class="card-title">Et officiis voluptatum sed quasi vitae</h5>

          <p>
            Et soluta neque <strong>Id sint</strong> in quia exercitationem ad illo reiciendis. Non possimus velit est
            quas harumSed atque.
          </p>
          <div class="card-actions justify-between">
            <button type="button" class="btn theme-neutral variant-ghost">Cancel</button>

            <button type="button" class="btn variant-soft">Subscribe</button>
          </div>
        </article>
      </div>

      <h4>Cards with Media</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
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
            <button type="button" class="btn theme-neutral variant-ghost">Cancel</button>

            <button type="button" class="btn variant-soft">Subscribe</button>
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
            <button type="button" class="btn theme-neutral variant-ghost">Cancel</button>

            <button type="button" class="btn variant-soft">Subscribe</button>
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
            <button type="button" class="btn theme-neutral variant-ghost">Cancel</button>

            <button type="button" class="btn variant-soft">Subscribe</button>
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
            <button type="button" class="btn theme-neutral variant-filled">Cancel</button>

            <button type="button" class="btn variant-filled">Subscribe</button>
          </div>
        </article>
      </div>

      <h4>Interactive Cards</h4>
      <div v-for="mode in modes" class="flex flex-wrap items-start gap-4 surface p-4" :class="mode">
        <em class="self-center">{{ mode }}</em>
        <article :class="componentClass" tabindex="0" class="max-w-80 min-w-60 flex-1 card-interactive">
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
        </article>

        <article :class="componentClass" tabindex="0" class="max-w-80 min-w-60 flex-1 card-interactive surface-themed">
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
        </article>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { modes, sizes, themes, variants, states } from '../settings';

const componentClass = [
  `card`,


  `group-has-[[value='size-xs']:checked]:size-xs`,
  `group-has-[[value='size-sm']:checked]:size-sm`,
  `group-has-[[value='size-md']:checked]:size-md`,
  `group-has-[[value='size-lg']:checked]:size-lg`,
  `group-has-[[value='size-xl']:checked]:size-xl`,


  `group-has-[[value='theme-neutral']:checked]:theme-neutral`,
  `group-has-[[value='theme-primary']:checked]:theme-primary`,
  `group-has-[[value='theme-secondary']:checked]:theme-secondary`,
  `group-has-[[value='theme-accent']:checked]:theme-accent`,
  `group-has-[[value='theme-success']:checked]:theme-success`,
  `group-has-[[value='theme-warning']:checked]:theme-warning`,
  `group-has-[[value='theme-error']:checked]:theme-error`,
  `group-has-[[value='theme-info']:checked]:theme-info`,


  `group-has-[[value='variant-filled']:checked]:variant-filled`,
  `group-has-[[value='variant-soft']:checked]:variant-soft`,
  `group-has-[[value='variant-outlined']:checked]:variant-outlined`,
  `group-has-[[value='variant-ghost']:checked]:variant-ghost`,


  `group-has-[[value='variant-dense']:checked]:variant-dense`,
  `group-has-[[value='variant-lax']:checked]:variant-lax`,


  `group-has-[[value='variant-pill']:checked]:variant-pill`,
  `group-has-[[value='variant-sharp']:checked]:variant-sharp`,


  `group-has-[[value='variant-square']:checked]:variant-square`,
];
</script>

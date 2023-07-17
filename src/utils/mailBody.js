export const mailBody = (title, message) => {
  return `
       <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
      }
      -white {
        background-color: #ffffff;
      }

      a {
        color: #012f6c;
        font-weight: bolder;
      }

      code {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
        font-size: 0.875rem;
        color: #2d3748;
        border-radius: 0.25rem;
      }

      .bg-blue {
        background-color: #012f6c;
      }

      .py-6 {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
      .px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }

      .lg\:px-8 {
        @media (min-width: 1024px) {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      .mx-auto {
        margin-left: auto;
        margin-right: auto;
      }

      .max-w-3xl {
        max-width: 48rem;
      }

      .text-base {
        font-size: 1rem;
      }

      .leading-7 {
        line-height: 1.75rem;
      }

      .text-gray-700 {
        color: #4a5568;
      }

      .text-white {
        color: white;
      }

      .text-base.font-semibold {
        font-size: 1rem;
        font-weight: 600;
      }

      .text-gray-900 {
        color: #1a202c;
      }

      .mt-2 {
        margin-top: 0.5rem;
      }

      .text-3xl {
        font-size: 1.875rem;
      }

      .font-bold {
        font-weight: 700;
      }

      .tracking-tight {
        letter-spacing: -0.025em;
      }

      .mt-6 {
        margin-top: 1.5rem;
      }

      .max-w-2xl {
        max-width: 42rem;
      }

      .text-xl {
        font-size: 1.25rem;
      }

      .leading-8 {
        line-height: 2rem;
      }

      .mt-10 {
        margin-top: 2.5rem;
      }

      .gap-x-3 {
        column-gap: 0.75rem;
        grid-column-gap: 0.75rem;
      }

      .text-sm {
        font-size: 0.875rem;
      }

      .text-center {
        text-align: center;
      }

      .leading-6 {
        line-height: 1.5rem;
      }

      .rounded-full {
        border-radius: 9999px;
      }

      .bg-gray-50 {
        background-color: #f7fafc;
      }

      .mt-16 {
        margin-top: 4rem;
      }

      .text-2xl {
        font-size: 1.5rem;
      }

      .mt-8 {
        margin-top: 2rem;
      }

      .border-l {
        border-left-width: 2px;
      }

      .border-blue {
        border-color: #667eea;
      }

      .pl-9 {
        padding-left: 2.25rem;
      }

      .border-l.border-blue {
        border-left-width: 2px;
        border-color: #667eea;
      }
    </style>
  </head>
  <body>
    <div class="lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1
          class="bg-blue text-center py-6 px-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
            ${title}
        </h1>

        <div class="mt-10 max-w-2xl">
         ${message}
        </div>
      </div>
    </div>
    <footer></footer>
  </body>
</html>

    `;
};

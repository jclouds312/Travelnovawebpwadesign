export interface Tool {
  icon: string;
  name: string;
  url: string;
  description: string;
  repoUrl: string;
}

export interface Category {
  title: string;
  tools: Tool[];
}

export const awesomeAiData: Category[] = [
  {
    title: "AI API",
    tools: [
      {
        icon: "https://ai.openbestof.com/images/tools/huggingface_icon.webp",
        name: "HuggingFace",
        url: "https://github.com/huggingface/transformers",
        description: "HugginFace is a collaboration platform allowing to host and collaborate on unlimited models, datasets and applications.",
        repoUrl: "https://github.com/huggingface/transformers"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/civitai_icon.webp",
        name: "CivitAI",
        url: "https://github.com/civitai/civitai",
        description: "Explore thousands of high-quality Stable Diffusion models, share your AI-generated art, and engage with a vibrant community of creators.",
        repoUrl: "https://github.com/civitai/civitai"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/mistral-ai_icon.webp",
        name: "Mistral AI",
        url: "https://github.com/mistralai/mistral-src",
        description: "Open and portable generative AI for devs and businesses.",
        repoUrl: "https://github.com/mistralai/mistral-src"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/anthropic_icon.webp",
        name: "Anthropic",
        url: "https://github.com/anthropics/anthropic-cookbook",
        description: "Anthropic is an AI safety and research company that's working to build reliable, interpretable, and steerable AI systems.",
        repoUrl: "https://github.com/anthropics/anthropic-cookbook"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/openai_icon.webp",
        name: "OpenAI",
        url: "https://github.com/openai/openai-cookbook",
        description: "OpenAI Platform API for accessing new AI models developed by OpenAI.",
        repoUrl: "https://github.com/openai/openai-cookbook"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/gemini-api_icon.webp",
        name: "Gemini API",
        url: "https://github.com/GoogleCloudPlatform/generative-ai",
        description: "Experience Google's largest and most capable AI model.",
        repoUrl: "https://github.com/GoogleCloudPlatform/generative-ai"
      }
    ]
  },
  {
    title: "AI Cloud",
    tools: [
      {
        icon: "https://ai.openbestof.com/images/tools/together-ai_icon.webp",
        name: "Together AI",
        url: "https://github.com/togethercomputer/together-python",
        description: "Build gen AI models with Together AI. Benefit from the fastest and most cost-efficient tools and infra.",
        repoUrl: "https://github.com/togethercomputer/together-python"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/vertex-ai_icon.webp",
        name: "Vertex AI",
        url: "https://github.com/googleapis/python-aiplatform",
        description: "Vertex AI is a fully-managed, unified AI development platform for building and using generative AI.",
        repoUrl: "https://github.com/googleapis/python-aiplatform"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/replicate_icon.webp",
        name: "Replicate",
        url: "https://github.com/replicate/cog",
        description: "Run and fine-tune open-source models. Deploy custom models at scale. All with one line of code.",
        repoUrl: "https://github.com/replicate/cog"
      }
    ]
  },
  {
    title: "LLMs Backend",
    tools: [
      {
        icon: "https://ai.openbestof.com/images/tools/llama.cpp_icon.webp",
        name: "Llama.cpp",
        url: "https://github.com/ggerganov/llama.cpp",
        description: "The main goal of llama.cpp is to run the LLaMA model using 4-bit integer quantization on a MacBook.",
        repoUrl: "https://github.com/ggerganov/llama.cpp"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/ollama_icon.webp",
        name: "Ollama",
        url: "https://github.com/jmorganca/ollama",
        description: "Ollama is LLMs Backend that allow you to get up and running with large language models locally.",
        repoUrl: "https://github.com/jmorganca/ollama"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/mudler-localai_icon.webp",
        name: "LocalAI",
        url: "https://github.com/mudler/LocalAI",
        description: "Drop-in replacement for OpenAI running on consumer-grade hardware. No GPU required.",
        repoUrl: "https://github.com/mudler/LocalAI"
      }
    ]
  },
  {
    title: "Stable Diffusion",
    tools: [
      {
        icon: "https://ai.openbestof.com/images/tools/fooocus_icon.webp",
        name: "Fooocus",
        url: "https://github.com/lllyasviel/Fooocus",
        description: "Fooocus is an image generating software (based on Gradio). Fooocus is a rethinking of Stable Diffusion and Midjourney’s designs.",
        repoUrl: "https://github.com/lllyasviel/Fooocus"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/comfy-ui_icon.webp",
        name: "Comfy UI",
        url: "https://github.com/comfyanonymous/ComfyUI",
        description: "ComfyUI is a stable diffusion GUI and backend that let you design and execute advanced stable diffusion pipelines using a graph/nodes/flowchart based interface.",
        repoUrl: "https://github.com/comfyanonymous/ComfyUI"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/a1111-webui_icon.webp",
        name: "A1111 WebUI",
        url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
        description: "Stable Diffusion Web UI is a Gradio browser interface for the Generative AI model Stable Diffusion.",
        repoUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
      }
    ]
  },
  {
    title: "Code Assistant",
    tools: [
      {
        icon: "https://ai.openbestof.com/images/tools/refact_icon.webp",
        name: "Refact",
        url: "https://github.com/smallcloudai/refact",
        description: "Refact is an open-source AI coding assistant with blazing-fast code completion, powerful code improvement tools, and chat.",
        repoUrl: "https://github.com/smallcloudai/refact"
      },
      {
        icon: "https://ai.openbestof.com/images/tools/continue_icon.webp",
        name: "Continue",
        url: "https://github.com/continuedev/continue",
        description: "Continue is an open-source autopilot for VS Code and JetBrains—the easiest way to code with any LLM.",
        repoUrl: "https://github.com/continuedev/continue"
      }
    ]
  }
];

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import logo from "@assets/generated_images/travelnova_globe_logo.png";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  email: z.string().email("Email inválido"),
  password: z.string().min(8, "Mínimo 8 caracteres"),
});

export default function Register() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Cuenta creada",
      description: "Bienvenido a TravelNova!",
    });
    setLocation("/");
  }

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-12 pb-6">
        <Link href="/interests">
           <span className="text-muted-foreground text-sm mb-6 block cursor-pointer hover:text-primary">← Atrás</span>
        </Link>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center gap-2 mb-6"
        >
             <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center p-1.5">
                <img src={logo} alt="Logo" className="w-full h-full object-contain filter invert-0" />
             </div>
             <span className="font-serif text-xl font-bold tracking-tight text-primary">TravelNova</span>
        </motion.div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Crea tu cuenta</h1>
        <p className="text-slate-500 mb-8">Únete a miles de viajeros explorando el mundo</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Juan Pérez" className="h-12 rounded-xl border-slate-200 bg-slate-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="tu@email.com" className="h-12 rounded-xl border-slate-200 bg-slate-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Mínimo 8 caracteres" className="h-12 rounded-xl border-slate-200 bg-slate-50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 rounded-full font-medium bg-primary hover:bg-primary/90 mt-6 shadow-lg shadow-primary/20">
              Crear cuenta
            </Button>
          </form>
        </Form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-100" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-400">O continúa con</span>
          </div>
        </div>

        <div className="space-y-3">
          <Button variant="outline" className="w-full h-12 rounded-full border-slate-200 font-medium text-slate-600 hover:bg-slate-50 gap-2">
            <span className="text-lg">G</span> Google
          </Button>
          <Button variant="outline" className="w-full h-12 rounded-full border-slate-200 font-medium text-slate-600 hover:bg-slate-50 gap-2">
            <span className="text-lg"></span> Apple
          </Button>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          ¿Ya tienes cuenta? <span className="text-primary font-bold cursor-pointer hover:underline">Inicia sesión</span>
        </p>
    </div>
  );
}

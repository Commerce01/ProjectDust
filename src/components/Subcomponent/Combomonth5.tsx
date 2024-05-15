"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useChart from "@/hooks/useChart";

const FormSchema = z.object({
  month: z.string(),
});

function findMonth(month: number) {
  switch (month) {
    case 1:
      return "มกราคม";
    case 2:
      return "กุมภาพันธ์";
    case 3:
      return "มีนาคม";
    case 4:
      return "เมษายน";
    case 5:
      return "พฤษภาคม";
    case 6:
      return "มิถุนายน";
    case 7:
      return "กรกฎาคม";
    case 8:
      return "สิงหาคม";
    case 9:
      return "กันยายน";
    case 10:
      return "ตุลาคม";
    case 11:
      return "พฤศจิกายน";
    case 12:
      return "ธันวาคม";
  }
}

export function ComboboxMonth5() {
  const { setBuildingFiveOptMonth } = useChart();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setBuildingFiveOptMonth(Number(data.month));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center space-x-2"
      >
        <FormField
          control={form.control}
          name="month"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกเดือนที่ต้องการ" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <SelectItem key={i} value={String(i + 1)}>
                      {findMonth(i + 1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ตรวจสอบ</Button>
      </form>
    </Form>
  );
}

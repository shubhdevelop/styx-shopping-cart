let IndianRuppe = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export function formatPrice(price: number) {
  return IndianRuppe.format(price);
}

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination } from "@/components/ShopProductSection";
import BreadCrumb from "@/components/BreadCrumb";
import SupportSection from "@/components/SupportSection";

export default function BlogPage() {
  return (
    <>
      <BreadCrumb
        backgroundImage="/banner.png"
        icon="/house.png"
        title="Blog"
        links={[
          { name: "Home", href: "/" },
          { name: "Blog", isActive: true },
        ]}
      />
      <div className=" px-10 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Blog Post 1 */}
            <article className="space-y-4">
              <Image
                src="/p1.png"
                alt="Laptop on wooden table"
                width={800}
                height={400}
                className="w-full rounded-lg"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold hover:text-primary">
                  <Link href="#">Going all-in with millennial design</Link>
                </h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link
                  href="#"
                  className="inline-block text-primary hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>

            {/* Blog Post 2 */}
            <article className="space-y-4">
              <Image
                src="/p2.png"
                alt="Person writing in notebook"
                width={800}
                height={400}
                className="w-full rounded-lg"
              />
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold hover:text-primary">
                  <Link href="#">Exploring new ways of decorating</Link>
                </h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link
                  href="#"
                  className="inline-block text-primary hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Design (12)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Development (8)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Technology (15)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Business (10)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Marketing (5)
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Image
                      src="/r1.png"
                      alt="Recent post thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <Link href="#" className="font-medium hover:text-primary">
                        The future of web development
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        June 12, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/r2.png"
                      alt="Recent post thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <Link href="#" className="font-medium hover:text-primary">
                        Essential design principles
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        June 8, 2023
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/r3.png"
                      alt="Recent post thumbnail"
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div>
                      <Link href="#" className="font-medium hover:text-primary">
                        Marketing strategies that work
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        June 1, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Pagination />
      </div>
      <SupportSection />
    </>
  );
}

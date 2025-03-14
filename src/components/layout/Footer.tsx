
import React from "react";
import { Link } from "react-router-dom";
import { Newsletter } from "@/components/home/Newsletter";
import { 
  FacebookIcon, 
  InstagramIcon, 
  TwitterIcon, 
  MapPinIcon, 
  PhoneIcon, 
  MailIcon 
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link to="/" className="inline-block">
                <h2 className="text-2xl font-bold text-primary">Niraa</h2>
                <p className="text-sm font-medium text-muted-foreground">Dry Fruits & Spices</p>
              </Link>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Premium quality dry fruits and spices sourced directly from farmers 
              across India. Quality guaranteed.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/dry-fruits" className="text-muted-foreground hover:text-primary transition-colors">
                  Dry Fruits
                </Link>
              </li>
              <li>
                <Link to="/category/spices" className="text-muted-foreground hover:text-primary transition-colors">
                  Spices
                </Link>
              </li>
              <li>
                <Link to="/category/wholesale" className="text-muted-foreground hover:text-primary transition-colors">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon size={18} className="text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  123 Market Street, Hyderabad, Telangana 500001, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon size={18} className="text-primary shrink-0" />
                <span className="text-muted-foreground">contact@niraa.com</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <Newsletter />
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Niraa Dry Fruits & Spices. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="hover:text-primary transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

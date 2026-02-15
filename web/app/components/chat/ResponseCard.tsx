import React from "react";
import { Card } from "../Card";
import { ResponseCard } from "@/types";
import { Wrench, Users, ShoppingBag, FileText, ExternalLink } from "lucide-react";

interface ResponseCardComponentProps {
  card: ResponseCard;
}

export const ResponseCardComponent: React.FC<ResponseCardComponentProps> = ({ card }) => {
  const icons = {
    diy: Wrench,
    pro: Users,
    product: ShoppingBag,
    content: FileText,
  };

  const Icon = icons[card.type];

  const handleClick = () => {
    if (card.link) {
      window.open(card.link, "_blank");
    }
  };

  return (
    <Card className="p-3 hover:shadow-md transition-shadow" onClick={card.link ? handleClick : undefined}>
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary-light/20 rounded-lg flex-shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-text-primary mb-0.5">
            {card.title}
          </h4>
          <p className="text-xs text-text-secondary mb-1">
            {card.description}
          </p>
          {card.price && (
            <p className="text-sm font-medium text-primary">{card.price}</p>
          )}
        </div>
        {card.link && (
          <ExternalLink className="w-4 h-4 text-text-secondary flex-shrink-0 mt-1" />
        )}
      </div>
    </Card>
  );
};

const autoPartColumns = [
  { field: "brand_id", header: "Auto Part ID", width: "400px" },
  { field: "brand_id", header: "Brand ID", width: 150 },
  { field: "model_id", header: "Model ID", width: 150 },
  { field: "generation_id", header: "Generation ID", width: 150 },
  { field: "manufacturer_id", header: "Manufactured ID", width: 150 },
  { field: "name", header: "Name", width: 150 },
  { field: "front_back", header: "Front / Back", width: 150 },
  { field: "left_right", header: "Left/Right", width: 150 },
  { field: "number_of_part", header: "Number of Parts", width: 150 },
  { field: "year", header: "Year", width: 150 },
  { field: "color", header: "Color", width: 150 },
  { field: "comment", header: "Comment", width: 150 },
  { field: "cross_number", header: "Cross Number", width: 150 },
  { field: "note", header: "Note", width: 150 },
  { field: "marking", header: "Marking", width: 150 },
  { field: "is_archive", header: "Is Archive", width: 150 },
  { field: "not_for_export", header: "Not for Export", width: 150 },
  { field: "site_link", header: "Site Link", width: 150 },
  { field: "old_bar_code", header: "Old Bar code", width: 150 },
  { field: "old_data", header: "Old Data", width: 150 },
  { field: "is_used", header: "Is Used", width: 150 },
  { field: "status", header: "Status", width: 150 },
  { field: "model", header: "Model", width: 150 },
  { field: "brand", header: "Brand", width: 150 },
  { field: "created_at", header: "Created At", width: 500 },
  { field: "updated_at", header: "Updated At", width: 500 },
  { field: "generation_name", header: "Generation", width: 150 },
];

export default autoPartColumns;

export interface Autopart {
  autopart_id: number;
  brand_id: string | null;
  model_id: string | null;
  generation_id: number;
  manufacturer_id: string | null;
  name: string;
  front_back: string | null;
  left_right: string;
  number_of_part: number | null;
  year: number | null;
  color: string | null;
  comment: string | null;
  cross_number: string | null;
  note: string | null;
  marking: string | null;
  is_archive: boolean;
  not_for_export: boolean;
  site_link: string | null;
  old_bar_code: string | null;
  old_data: string | null;
  is_used: string;
  status: string;
  created_at: string;
  updated_at: string;
  model: string | null;
  brand: string | null;
  generation: {
    id: number;
    name: string;
    model_id: number;
  } | null;
}
